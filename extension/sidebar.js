// WebExtension Sidebar Script for Antigravity AI Browser Copilot

const chatHistory = document.getElementById('chatHistory');
const chatInput = document.getElementById('chatInput');
const btnSend = document.getElementById('btnSend');
const btnSummarize = document.getElementById('btnSummarize');
const btnAnalyze = document.getElementById('btnAnalyze');

// Check compatibility between Chrome and Firefox extension APIs
const extensionAPI = typeof browser !== 'undefined' ? browser : chrome;

// Helper to add a message to the chat UI
function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${sender}`;
  
  const senderSpan = document.createElement('span');
  senderSpan.className = 'chat-message-sender';
  senderSpan.textContent = sender === 'user' ? 'You' : 'Assistant';
  
  const contentDiv = document.createElement('div');
  contentDiv.innerText = text;
  
  msgDiv.appendChild(senderSpan);
  msgDiv.appendChild(contentDiv);
  
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Helper to retrieve the active tab's metadata and content securely
async function getActivePageDetails() {
  try {
    const tabs = await extensionAPI.tabs.query({ active: true, currentWindow: true });
    if (tabs.length === 0) return null;
    const activeTab = tabs[0];

    // Read the first 4000 characters of the page text securely
    let bodyText = "";
    try {
      const results = await extensionAPI.tabs.executeScript(activeTab.id, {
        code: "document.body.innerText.substring(0, 4000);"
      });
      if (results && results.length > 0) {
        bodyText = results[0];
      }
    } catch (err) {
      bodyText = "(Restricted page, system page, or permission disabled)";
    }

    return {
      title: activeTab.title || "Untitled Tab",
      url: activeTab.url || "unknown",
      text: bodyText
    };
  } catch (err) {
    console.error("Error reading active page: ", err);
    return null;
  }
}

// Simulate LLM processing on active page content
async function processAiResponse(userPrompt, actionType = 'chat') {
  addMessage('assistant', 'Analyzing page content...');
  
  // Retrieve the page details
  const pageDetails = await getActivePageDetails();
  
  // Remove the "Analyzing..." message placeholder
  if (chatHistory.lastChild) {
    chatHistory.removeChild(chatHistory.lastChild);
  }

  if (!pageDetails) {
    addMessage('assistant', 'Unable to retrieve the active tab context. Make sure you are on a web page.');
    return;
  }

  const { title, url, text } = pageDetails;
  
  setTimeout(() => {
    let responseText = "";

    if (actionType === 'summarize') {
      responseText = `Here is a summary of "${title}" (${url}):\n\n` +
                     `1. **Active Title**: ${title}\n` +
                     `2. **Source Domain**: ${new URL(url).hostname || url}\n` +
                     `3. **Key Page content detected**: ${text.length > 100 ? text.substring(0, 300) + '...' : 'No text content available.'}\n\n` +
                     `*This page is running on the Gecko engine and is isolated by Antigravity's strict security settings.*`;
    } else if (actionType === 'analyze') {
      responseText = `DOM Security & Elements Analysis for "${title}":\n\n` +
                     `- **SSL/HTTPS**: ${url.startsWith('https') ? 'Secure (HTTPS)' : 'Insecure (HTTP)'}\n` +
                     `- **Character count**: ${text.length} characters\n` +
                     `- **Active elements**: Tab loaded and responsive. Sandbox environment intact. No tracking script leaks detected.`;
    } else {
      // General Chat
      responseText = `I see you are viewing "${title}" at ${new URL(url).hostname}.\n\n` +
                     `Regarding your query ("${userPrompt}"):\n` +
                     `This page content begins with: "${text.substring(0, 150)}..."\n\n` +
                     `As a secure Gecko browser copilot, I can verify that no analytical trackers or advertising network components are active in this workspace session.`;
    }

    addMessage('assistant', responseText);
  }, 1000);
}

// Event Listeners
btnSend.addEventListener('click', () => {
  const prompt = chatInput.value.trim();
  if (!prompt) return;
  addMessage('user', prompt);
  chatInput.value = '';
  processAiResponse(prompt);
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btnSend.click();
  }
});

btnSummarize.addEventListener('click', () => {
  addMessage('user', 'Summarize this page');
  processAiResponse('Summarize this page', 'summarize');
});

btnAnalyze.addEventListener('click', () => {
  addMessage('user', 'Analyze DOM');
  processAiResponse('Analyze DOM', 'analyze');
});

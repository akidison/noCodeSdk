// Pushwoosh NoCode Builder — Main App

let currentTab = 'json';

// Toolbox definition
const toolbox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Events',
            colour: 210,
            contents: [
                { kind: 'block', type: 'pw_on_app_start' }
            ]
        },
        {
            kind: 'category',
            name: 'Push',
            colour: 120,
            contents: [
                { kind: 'block', type: 'pw_register_push' }
            ]
        },
        {
            kind: 'category',
            name: 'User',
            colour: 260,
            contents: [
                { kind: 'block', type: 'pw_set_user_id' },
                { kind: 'block', type: 'pw_set_email' }
            ]
        },
        {
            kind: 'category',
            name: 'Tags',
            colour: 30,
            contents: [
                { kind: 'block', type: 'pw_set_tag' },
                { kind: 'block', type: 'pw_increment_tag' }
            ]
        },
        {
            kind: 'category',
            name: 'Settings',
            colour: 160,
            contents: [
                { kind: 'block', type: 'pw_set_language' }
            ]
        },
        {
            kind: 'category',
            name: 'Communication',
            colour: 330,
            contents: [
                { kind: 'block', type: 'pw_start_communication' },
                { kind: 'block', type: 'pw_stop_communication' }
            ]
        },
        {
            kind: 'category',
            name: 'Network',
            colour: 0,
            contents: [
                { kind: 'block', type: 'pw_set_reverse_proxy' }
            ]
        }
    ]
};

// Dark theme
const darkTheme = Blockly.Theme.defineTheme('pushwooshDark', {
    base: Blockly.Themes.Classic,
    componentStyles: {
        workspaceBackgroundColour: '#0f1117',
        toolboxBackgroundColour: '#161b22',
        toolboxForegroundColour: '#e1e4e8',
        flyoutBackgroundColour: '#21262d',
        flyoutForegroundColour: '#e1e4e8',
        flyoutOpacity: 0.95,
        scrollbarColour: '#30363d',
        scrollbarOpacity: 0.6,
        insertionMarkerColour: '#58a6ff',
        insertionMarkerOpacity: 0.5,
        cursorColour: '#58a6ff'
    },
    fontStyle: {
        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        weight: '500',
        size: 12
    }
});

// Initialize workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    theme: darkTheme,
    grid: {
        spacing: 25,
        length: 3,
        colour: '#1c2028',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 2,
        minScale: 0.5,
        scaleSpeed: 1.1
    },
    trashcan: true,
    renderer: 'zelos'
});

// Add default "On App Start" block
function addDefaultBlock() {
    const xml = Blockly.utils.xml.textToDom(
        '<xml><block type="pw_on_app_start" x="40" y="40"></block></xml>'
    );
    Blockly.Xml.domToWorkspace(xml, workspace);
}
addDefaultBlock();

// Update output on every change
workspace.addChangeListener(function (event) {
    if (event.isUiEvent) return;
    updateOutput();
});

function updateOutput() {
    const output = document.getElementById('codeOutput');
    const countEl = document.getElementById('actionCount');

    if (currentTab === 'json') {
        const config = generateJSON(workspace);
        output.textContent = JSON.stringify(config, null, 2);

        const count = config.onAppStart ? config.onAppStart.length : 0;
        countEl.textContent = count + ' action' + (count !== 1 ? 's' : '');
    } else {
        output.textContent = generateSwift(workspace);
        countEl.textContent = 'Swift code';
    }
}

function switchTab(tab, btn) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateOutput();
}

function getJSONString() {
    const config = generateJSON(workspace);
    return JSON.stringify(config, null, 2);
}

function downloadJSON() {
    const json = getJSONString();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pushwoosh-nocode.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded pushwoosh-nocode.json');
}

function copyJSON() {
    const text = currentTab === 'json' ? getJSONString() : generateSwift(workspace);
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard');
    });
}

function clearWorkspace() {
    workspace.clear();
    addDefaultBlock();
    showToast('Workspace cleared');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Initial render
updateOutput();

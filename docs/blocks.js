// Pushwoosh NoCode — Custom Blockly Block Definitions

// === Initialization ===

Blockly.defineBlocksWithJsonArray([
    {
        "type": "pw_on_app_start",
        "message0": "On App Start %1 %2",
        "args0": [
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "ACTIONS" }
        ],
        "colour": 210,
        "tooltip": "Actions executed when the app launches",
        "helpUrl": ""
    },

    // === Push ===

    {
        "type": "pw_register_push",
        "message0": "Register for Push Notifications",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Request push notification permission and register device"
    },

    // === User ===

    {
        "type": "pw_set_user_id",
        "message0": "Set User ID %1",
        "args0": [
            { "type": "field_input", "name": "VALUE", "text": "user_123" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 260,
        "tooltip": "Set the user identifier for segmentation"
    },
    {
        "type": "pw_set_email",
        "message0": "Set Email %1",
        "args0": [
            { "type": "field_input", "name": "VALUE", "text": "user@example.com" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 260,
        "tooltip": "Set user email address"
    },

    // === Tags ===

    {
        "type": "pw_set_tag",
        "message0": "Set Tag %1 = %2",
        "args0": [
            { "type": "field_input", "name": "KEY", "text": "category" },
            { "type": "field_input", "name": "VALUE", "text": "premium" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 30,
        "tooltip": "Set a string tag value"
    },
    {
        "type": "pw_increment_tag",
        "message0": "Increment Tag %1 by %2",
        "args0": [
            { "type": "field_input", "name": "KEY", "text": "app_opens" },
            { "type": "field_number", "name": "VALUE", "value": 1, "min": 1 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 30,
        "tooltip": "Increment a numeric tag"
    },

    // === Settings ===

    {
        "type": "pw_set_language",
        "message0": "Set Language %1",
        "args0": [
            { "type": "field_dropdown", "name": "VALUE", "options": [
                ["English (en)", "en"],
                ["Spanish (es)", "es"],
                ["French (fr)", "fr"],
                ["German (de)", "de"],
                ["Portuguese (pt)", "pt"],
                ["Russian (ru)", "ru"],
                ["Chinese (zh)", "zh"],
                ["Japanese (ja)", "ja"],
                ["Korean (ko)", "ko"],
                ["Arabic (ar)", "ar"]
            ]}
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Set device language for localized push notifications"
    },

    // === Communication ===

    {
        "type": "pw_start_communication",
        "message0": "Start Server Communication",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Enable communication with Pushwoosh servers"
    },
    {
        "type": "pw_stop_communication",
        "message0": "Stop Server Communication",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Disable communication with Pushwoosh servers"
    },

    // === Proxy ===

    {
        "type": "pw_set_reverse_proxy",
        "message0": "Set Reverse Proxy %1",
        "args0": [
            { "type": "field_input", "name": "VALUE", "text": "https://proxy.example.com" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "Route SDK requests through a reverse proxy"
    }
]);

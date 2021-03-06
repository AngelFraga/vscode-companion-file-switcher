import * as vscode from 'vscode';

import {switchCommand} from './switch-command';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.companionFileSwitcher.switch', () => {
        switchCommand();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
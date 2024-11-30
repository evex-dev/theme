import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Initializing Evex Theme...');

	const disposable = vscode.commands.registerCommand('evex-theme.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Evex Theme!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

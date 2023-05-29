// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cleancode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let command_1 = vscode.commands.registerCommand('cleancode.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		//vscode.window.showInformationMessage('Notification from cleancode!');
		let dateTime = new Date();
		vscode.window.showWarningMessage("Current date : " + dateTime);
	});

	let command_2 = vscode.commands.registerCommand('cleancode.askQuestion', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const answer = await vscode.window.showInformationMessage("How was your day","good","bad");
		if (answer== "bad")
			vscode.window.showWarningMessage("Sorry for a bad day");
		else
			vscode.window.showWarningMessage("Nice to hear that you have a good day");
	});

	context.subscriptions.push(command_1);
	context.subscriptions.push(command_2);
}

// This method is called when your extension is deactivated
export function deactivate() {}

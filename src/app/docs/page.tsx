import Link from "next/link";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center mb-8 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="prose prose-invert max-w-none">
          <h1>nextFlow README</h1>
          <p>
            This is the README for your extension "nextFlow". After writing up a
            brief description, we recommend including the following sections.
          </p>

          <h2>Features</h2>
          <p>
            Describe specific features of your extension including screenshots
            of your extension in action. Image paths are relative to this README
            file.
          </p>

          <p>
            For example if there is an image subfolder under your extension
            project workspace:
          </p>

          <p>![feature X](images/feature-x.png)</p>

          <p>
            <strong>Tip:</strong> Many popular extensions utilize animations.
            This is an excellent way to show off your extension! We recommend
            short, focused animations that are easy to follow.
          </p>

          <h2>Requirements</h2>
          <p>
            If you have any requirements or dependencies, add a section
            describing those and how to install and configure them.
          </p>

          <h2>Extension Settings</h2>
          <p>
            Include if your extension adds any VS Code settings through the
            contributes.configuration extension point.
          </p>

          <p>For example:</p>

          <p>This extension contributes the following settings:</p>
          <ul>
            <li>myExtension.enable: Enable/disable this extension.</li>
            <li>myExtension.thing: Set to blah to do something.</li>
          </ul>

          <h2>Known Issues</h2>
          <p>
            Calling out known issues can help limit users opening duplicate
            issues against your extension.
          </p>

          <h2>Release Notes</h2>
          <p>Users appreciate release notes as you update your extension.</p>

          <h3>1.0.0</h3>
          <p>Initial release of ...</p>

          <h3>1.0.1</h3>
          <p>Fixed issue #.</p>

          <h3>1.1.0</h3>
          <p>Added features X, Y, and Z.</p>

          <h2>Following extension guidelines</h2>
          <p>
            Ensure that you've read through the extensions guidelines and follow
            the best practices for creating your extension.
          </p>

          <h2>Extension Guidelines</h2>
          <h2>Working with Markdown</h2>
          <p>
            You can author your README using Visual Studio Code. Here are some
            useful editor keyboard shortcuts:
          </p>
          <ul>
            <li>
              Split the editor (Cmd+\ on macOS or Ctrl+\ on Windows and Linux).
            </li>
            <li>
              Toggle preview (Shift+Cmd+V on macOS or Shift+Ctrl+V on Windows
              and Linux).
            </li>
            <li>
              Press Ctrl+Space (Windows, Linux, macOS) to see a list of Markdown
              snippets.
            </li>
          </ul>

          <h2>For more information</h2>
          <ul>
            <li>Visual Studio Code's Markdown Support</li>
            <li>Markdown Syntax Reference</li>
          </ul>

          <p>Enjoy!</p>
        </div>
      </main>
    </div>
  );
}

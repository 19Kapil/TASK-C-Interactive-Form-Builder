Overview
This is a drag-and-drop form builder application that allows users to dynamically create forms with customizable elements.
 It supports features such as adding, editing, and removing form elements and previewing the final form before submission.

Features:
-Drag-and-Drop Functionality: Easily create forms by dragging elements onto the canvas.

-Customizable Elements: Supports text inputs, dropdowns, checkboxes, radio buttons, and more.

-Live Preview: Preview the form in real-time.

-Responsive Design: Works seamlessly on desktop and mobile devices.

-Submit Feature:Submit the form and view a success message.

Technologies Used
-Frontend: React, Redux, React-DnD (Drag-and-Drop library)
-Icons: React Icons (e.g., FontAwesome)
-Styling: Tailwind CSS or CSS Modules
-State Management: Redux

Installation and Setup
Prerequisites
-npm installed on your machine.

Usage
-Drag form elements (e.g., input, checkbox, radio button) from the toolbox to the workspace.
-Customize the properties of each element (e.g., label, placeholder, options).
-Preview the form in the Preview Modal.
-Submit the form and see a success message.

Key Files
-src/components/PreviewModal.jsx: Renders the preview of the form with a submit button.
-src/components/FormElement.jsx: Dynamically renders each form element based on its type.
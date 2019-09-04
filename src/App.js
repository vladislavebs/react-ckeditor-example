import React from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

const editorConfiguration = {
    plugins: [SimpleUploadAdapter, Essentials, Heading, Bold, Italic, Image, ImageUpload],
    toolbar: ['heading', '|', 'undo', 'redo', 'bold', 'italic', 'imageUpload'],
    simpleUpload: {
        uploadUrl: '',
        headers: {}
    }
};

export default () => (
    <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
            const data = editor.getData();
            console.log({event, editor, data});
        }}
        onBlur={(event, editor) => {
            console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
            console.log('Focus.', editor);
        }}
    />
);

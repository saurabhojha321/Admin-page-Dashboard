import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichTextForm = () => {
    // State to hold the content from the editor
    const [content, setContent] = useState('');
    const editorRef = useRef(null);

    const handleEditorChange = (a, editor) => {
        // Editor content ko state mein update karna
        setContent(editor.getContent());
    };

    const handleSubmit = () => {
        // Console mein content dikhane ke liye
        console.log("Submitting Content:", content);
        // Yahan aap content ko API mein bhej sakte hain
    };

    // TinyMCE configuration jo aapke screenshot se match karta hai
    const editorConfig = {
        // *** IMPORTANT: Apni API Key yahan daalni hai! ***
        apiKey: 'ryzgo5pmawgaq2l1siborb0e2i913v0d13lzzt7auss9ozc6', 
        
        // Editor ki height aur appearance
        height: 500,
        menubar: 'file edit view insert format tools help', // File, Edit, View tabs
        
        // Plugins for features like lists, links, images etc.
        plugins: [
            'advlist autolink lists link image charmap preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
        ],
        
        // Toolbar jo icons aur dropdowns dikhata hai
        toolbar: 
            'undo redo | paragraph | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            
        // 'Paragraph' dropdown ko enable karne ke liye (FormatSelect)
        block_formats: 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3',
        
        // Default content (optional)
        initialValue: '<p>Start writing your long description here...</p>',
        
        // Editor ke corners ko thoda gol karne ke liye (CSS se bhi kar sakte hain)
        skin: 'oxide', // Default skin
        content_css: 'default' // Default content CSS
    };

    return (
        <div className="add-new-service-container">
            {/* ... Other Header/Progress Steps components would go here ... */}

            <div className="form-section-description">
                {/* Editor Container/Styling */}
                <div className="rich-text-editor-container">
                    
                    {/* Label */}
                    <label className="editor-label">Long Description (Default) *</label>
                    
                    {/* TinyMCE Editor Component */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={editorConfig.initialValue}
                        init={editorConfig}
                        onEditorChange={handleEditorChange}
                        // Optional: Branding ko chhupana
                        // branding={false} 
                    />
                </div>
            </div>

            {/* Navigation Buttons (Bottom of the page) */}
            <div className="navigation-buttons">
                <button className="nav-button previous">PREVIOUS</button>
                <button className="nav-button next" onClick={handleSubmit}>NEXT</button>
            </div>
        </div>
    );
};

export default RichTextForm;
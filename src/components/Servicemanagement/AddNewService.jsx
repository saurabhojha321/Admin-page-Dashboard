import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react'; // 👈 1. TinyMCE Import
import './AddNewService.css';

const AddNewService = () => {
  // State for form fields
  const [serviceName, setServiceName] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [taxPercentage, setTaxPercentage] = useState('');
  const [minBiddingPrice, setMinBiddingPrice] = useState('');
  const [tags, setTags] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState(''); // This will be updated by TinyMCE
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const editorRef = useRef(null); // Ref for TinyMCE instance

  // TinyMCE Handler (Updates the longDescription state)
  const handleEditorChange = (newValue, editor) => {
    setLongDescription(newValue);
  };

  const handleThumbnailUpload = (e) => {
    setThumbnailImage(e.target.files[0]);
  };

  const handleCoverUpload = (e) => {
    setCoverImage(e.target.files[0]);
  };
  
  // Custom Handler for NEXT button (Instead of handleSubmit for the entire form)
  const handleNextClick = () => {
    // Here you would typically save the current step's data and move to Step 2
    console.log('Moving to Next Step (Price Variation)! Current Data:', {
        serviceName,
        // ... other fields
        longDescription, // This contains the HTML content from TinyMCE
    });
    alert('Data Ready for Next Step! (Check console)');
    // In a real app, this would trigger a state change to show the next step form (Price Variation).
  };
  
  // TinyMCE Configuration (Matches the screenshot look)
  const editorConfig = {
    // *** IMPORTANT: Apni API Key yahan daalni hai! ***
    apiKey: 'ryzgo5pmawgaq2l1siborb0e2i913v0d13lzzt7auss9ozc6' ,
    height: 500,
    menubar: 'file edit view insert format', // Screenshot Tabs
    plugins: [
        'advlist autolink lists link image charmap preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    // Screenshot Toolbar Icons (Undo/Redo, Paragraph, Bold/Italic, Alignment)
    toolbar: 
        'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    block_formats: 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3',
    branding: true, // Shows the 'tiny' watermark
  };


  return (
    // ⚠️ Removed <form onSubmit={handleSubmit}> from here and placed individual elements inside 
    // because the navigation buttons 'NEXT/PREVIOUS' typically manage multi-step forms.
    <div className="add-new-service-container">
      <div className="header">
        <h1>Add New Service</h1>
        <div className="language-tabs">
          <span className="active">Default</span>
          <span>English</span>
        </div>
      </div>
      
      {/* ⚠️ Progress Steps are now active for Step 1 */}
      <div className="progress-steps">
        <div className="step active">
          <span>1</span>
          <p>Service Information</p>
        </div>
        <div className="step">
          <span>2</span>
          <p>Price variation</p>
        </div>
      </div>
      
      {/* ⚠️ Using a div instead of a form tag here for better control over multi-step navigation */}
      <div> 
        <div className="form-section-main">
          <div className="form-section-left">
            <div className="form-field">
              <label htmlFor="service-name">Service's Name (Default) *</label>
              <input
                type="text"
                id="service-name"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                placeholder="Service's Name (Default)"
              />
            </div>
            <div className="form-field">
              <label htmlFor="category">Choose Category *</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="subcategory">Choose Subcategory *</label>
              <select
                id="subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              >
                <option value="">Choose Subcategory</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="tax-percentage">% Add Tax Percentage *</label>
              <input
                type="number"
                id="tax-percentage"
                value={taxPercentage}
                onChange={(e) => setTaxPercentage(e.target.value)}
                placeholder="% Add Tax Percentage"
              />
            </div>
            <div className="form-field">
              <label htmlFor="min-price">Minimum Bidding Price *</label>
              <input
                type="number"
                id="min-price"
                value={minBiddingPrice}
                onChange={(e) => setMinBiddingPrice(e.target.value)}
                placeholder="Minimum Bidding Price"
              />
            </div>
            <div className="form-field">
              <label htmlFor="tags">Enter tags</label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter tags"
              />
            </div>
          </div>
          <div className="form-section-right">
            <div className="upload-box thumbnail-upload">
              <label>Thumbnail image *</label>
              <div className="upload-area">
                <input
                  type="file"
                  id="thumbnail-upload-input"
                  onChange={handleThumbnailUpload}
                />
                <label htmlFor="thumbnail-upload-input" className="upload-button">
                  Upload File
                </label>
                {thumbnailImage && <p className="uploaded-file-name">{thumbnailImage.name}</p>}
                <div className="upload-info">
                  <p>Image format: .jpg, .png, .jpeg, .gif</p>
                  <p>Image size: maximum size 2 MB</p>
                  <p>Image Ratio: ~1:1</p>
                </div>
              </div>
            </div>
            <div className="upload-box cover-upload">
              <label>Cover image *</label>
              <div className="upload-area">
                <input
                  type="file"
                  id="cover-upload-input"
                  onChange={handleCoverUpload}
                />
                <label htmlFor="cover-upload-input" className="upload-button">
                  Upload File
                </label>
                {coverImage && <p className="uploaded-file-name">{coverImage.name}</p>}
                <div className="upload-info">
                  <p>Image format: .jpg, .png, .jpeg, .gif</p>
                  <p>Image size: maximum size 2 MB</p>
                  <p>Image Ratio: ~2:1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section-description">
          <div className="form-field">
            <label htmlFor="short-description">Short Description (Default) *</label>
            <textarea
              id="short-description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>
          
          {/* ------------------------------------------------------------------ */}
          {/* 💥 REPLACED THE PLACEHOLDER EDITOR WITH TINYMCE 💥 */}
          {/* ------------------------------------------------------------------ */}
          <div className="form-field">
            {/* Note: Label is now inside the rich-text-editor-container for styling */}
            
            {/* rich-text-editor-container class is from your CSS for border/shadow */}
            <div className="rich-text-editor-container"> 
              {/* editor-label class is from your CSS for the top label look */}
              <label className="editor-label">Long Description (Default) *</label> 
              
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                init={editorConfig}
                onEditorChange={handleEditorChange} // Use the TinyMCE handler
                initialValue={longDescription}
              />
              
              {/* Optional: Add the Upgrade button outside the editor component if needed */}
              {/* <span className="upgrade-button">Upgrade</span> */}
              
            </div>
          </div>
          {/* ------------------------------------------------------------------ */}
          
        </div>
        
        {/* ------------------------------------------------------------------ */}
        {/* 💥 ADDED NAVIGATION BUTTONS AS PER SCREENSHOT 💥 */}
        {/* ------------------------------------------------------------------ */}
        <div className="navigation-buttons">
            <button type="button" className="nav-button previous">PREVIOUS</button>
            {/* NEXT button uses the handleNextClick function */}
            <button type="button" className="nav-button next" onClick={handleNextClick}>NEXT</button>
        </div>
        {/* ------------------------------------------------------------------ */}
        
      </div>
      
      {/* ⚠️ Removed the old form-actions and submit-button, as navigation buttons handle this. */}
    </div>
  );
};

export default AddNewService;
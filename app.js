document.addEventListener('DOMContentLoaded', () => {
    // --- Main Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = item.getAttribute('data-target');

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked nav item
            item.classList.add('active');

            // Hide all page sections
            pageSections.forEach(section => section.classList.remove('active'));

            // Show target section
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Admin Panel Sub-Navigation Logic ---
    const adminCards = document.querySelectorAll('.admin-card');
    const adminTabs = document.querySelectorAll('.admin-tab');

    // Make Result Entry active by default on load in Admin Panel
    if (adminCards.length > 0) {
        adminCards[0].classList.add('active');
    }

    adminCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active from all admin cards
            adminCards.forEach(c => c.classList.remove('active'));

            // Add active to clicked admin card
            card.classList.add('active');

            // Hide all admin tabs
            adminTabs.forEach(tab => tab.classList.add('hidden'));

            // Show target admin tab
            const targetTabId = card.getAttribute('data-tab');
            document.getElementById(targetTabId).classList.remove('hidden');
        });
    });

    // --- Poster Preview Live Update Logic ---
    const titleInput = document.getElementById('poster-title');
    const descInput = document.getElementById('poster-desc');
    const colorInput = document.getElementById('poster-color');

    const previewTitle = document.getElementById('preview-title');
    const previewDesc = document.getElementById('preview-desc');
    const posterCanvas = document.getElementById('poster-canvas');

    if (titleInput && previewTitle) {
        titleInput.addEventListener('input', (e) => {
            previewTitle.textContent = e.target.value || 'Poster Title';
        });
    }

    if (descInput && previewDesc) {
        descInput.addEventListener('input', (e) => {
            previewDesc.textContent = e.target.value || 'Poster Details';
        });
    }

    if (colorInput && posterCanvas) {
        colorInput.addEventListener('input', (e) => {
            const hexColor = e.target.value;
            // Create a nice gradient based on the selected color
            posterCanvas.style.background = `linear-gradient(135deg, ${hexColor}, #1e1b4b)`;
        });
    }

    // --- Programs Data ---
    const programCategories = [
        {
            name: "Lower Primary",
            items: [
                "1. Madh'h Ganam", "2. Speech", "3. Quiz", "4. Story Telling",
                "5. Pencil Drawing", "6. Watercolor Painting", "7. Bhasha Keli",
                "8. Malayalam Reading", "9. Arabic-Malayalam Reading", "10. Book Test"
            ]
        },
        {
            name: "Lower Primary (Girls)",
            items: [
                "11. Pencil Drawing", "12. Watercolor Painting", "13. Malayalam Handwriting", "14. Journal Art"
            ]
        },
        {
            name: "Upper Primary",
            items: [
                "15. Mappilappattu", "16. Story Telling", "17. Speech", "18. Ganithakeli",
                "19. Quiz", "20. Pencil Drawing", "21. Watercolor Painting", "22. Story Writing",
                "23. Book Test", "24. Spelling Bee", "25. Sudoku"
            ]
        },
        {
            name: "Upper Primary (Girls)",
            items: [
                "26. Pencil Drawing", "27. Watercolor Painting", "28. Book Test", "29. Story Writing", "30. Origami"
            ]
        },
        {
            name: "High School",
            items: [
                "31. Malayalam Speech", "32. English Speech", "33. Mappilappattu", "34. Madh'h Ganam",
                "35. Arabic Poem Recitation", "36. Malayalam Poem Recitation", "37. Urdu Poem Recitation",
                "38. Quiz", "39. Story Writing", "40. Poem Writing", "41. Pencil Drawing",
                "42. Watercolor Painting", "43. Book Test", "44. Malayalam Essay",
                "45. News Reading", "46. Dictionary", "47. English Language Game"
            ]
        },
        {
            name: "High School (Girls)",
            items: [
                "48. Embroidery", "49. Book Test", "50. Pencil Drawing", "51. Watercolor Painting",
                "52. Story Writing", "53. Poem Writing"
            ]
        },
        {
            name: "Higher Secondary",
            items: [
                "54. Urdu Poem Recitation", "55. Mappilappattu", "56. Devotional Song", "57. Speech",
                "58. Digital Painting", "59. Story Writing", "60. Poem Writing", "61. Malayalam Essay",
                "62. English Essay", "63. Quiz", "64. Pencil Drawing", "65. Watercolor Painting",
                "66. Book Test", "67. News Writing", "68. Arabic Calligraphy", "69. Reel Making"
            ]
        },
        {
            name: "Higher Secondary (Girls)",
            items: [
                "70. Arabic Calligraphy", "71. Book Test", "72. Story Writing", "73. Poem Writing"
            ]
        },
        {
            name: "Junior",
            items: [
                "74. Literary Debate", "75. Mappilappattu", "76. Malayalam Speech", "77. Arabic Speech",
                "78. English Speech", "79. Poem Writing", "80. Story Writing", "81. Book Test",
                "82. Malayalam Essay", "83. Arabic Essay", "84. Slogan Writing", "85. Madh'h Ganam Writing",
                "86. Quiz", "87. Arabic Translation", "88. Arabic Calligraphy", "89. Social Text",
                "90. Hadees Musabakha", "91. AI Poem Writing", "92. Reel Making", "93. Podcast", "94. Socio Synapse"
            ]
        },
        {
            name: "Senior",
            items: [
                "95. Political Debate", "96. Mappilappattu", "97. Hamd Urdu", "98. English Poem Recitation",
                "99. Malayalam Speech", "100. English Speech", "101. Urdu Speech", "102. Mushaira Alfiya",
                "103. Poem Writing", "104. English Poem Writing", "105. Story Writing", "106. Book Test",
                "107. Malayalam Essay", "108. English Essay", "109. Urdu Essay", "110. English Translation",
                "111. Madh'h Ganam Writing", "112. Slogan Writing", "113. Quiz", "114. Feature Writing",
                "115. Social Text", "116. Poster Designing", "117. E-Poster", "118. Digital Illustration",
                "119. Magazine Layout", "120. Digital Painting", "121. Podcast"
            ]
        },
        {
            name: "Campus",
            items: [
                "141. Mappilappattu", "142. Madh'h Ganam", "143. Malayalam Speech", "144. English Speech",
                "145. Malayalam Essay", "146. English Essay", "147. Malayalam Story Writing",
                "148. Malayalam Poem Writing", "149. English Poem Writing"
            ]
        }
    ];
    // --- Dynamic Data ---
    let systemUnits = ["Avilora", "Parammal", "Karanikkallu", "Kunnummal", "Karimbarakundu", "Busthanabad", "Parakkandy", "Katharammal"];
    
    // Published Results Array
    let publishedResults = [];

    const programsContainer = document.getElementById('programs-container');
    if (programsContainer) {
        let htmlContent = '';
        programCategories.forEach(category => {
            htmlContent += `
                <div class="category-group">
                    <div class="category-header">
                        <span>${category.name}</span>
                        <span style="font-size: 0.9rem; font-weight: normal; opacity: 0.8">${category.items.length} Items</span>
                    </div>
                    <div class="category-content">
                        ${category.items.map(item => {
                            const isPublished = publishedResults.includes(item);
                            return `
                            <div class="program-item" style="opacity: ${isPublished ? '1' : '0.6'};">
                                <i class="${isPublished ? 'fas fa-check-circle' : 'far fa-circle'}" style="color: ${isPublished ? 'var(--success)' : 'var(--text-muted)'};"></i>
                                <span>${item}</span>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });
        programsContainer.innerHTML = htmlContent;
    }

    // --- Update Dashboard Stats ---
    const totalPrograms = programCategories.reduce((acc, cat) => acc + cat.items.length, 0);
    const statPublished = document.getElementById('stat-published');
    const statPending = document.getElementById('stat-pending');
    const statUnits = document.getElementById('stat-units');

    if (statPublished) statPublished.textContent = publishedResults.length;
    if (statPending) statPending.textContent = totalPrograms - publishedResults.length;
    if (statUnits) statUnits.textContent = systemUnits.length;

    // --- Update Published Results List on Home ---
    const homePublishedList = document.getElementById('home-published-list');
    if (homePublishedList) {
        if (publishedResults.length > 0) {
            homePublishedList.innerHTML = publishedResults.map(res => `
                <div class="activity-item">
                    <div class="activity-dot green"></div>
                    <div class="activity-text">
                        <p><strong>Published:</strong> ${res}</p>
                        <span>Available in system</span>
                    </div>
                </div>
            `).join('');
        } else {
            homePublishedList.innerHTML = '<p style="color: var(--text-muted); padding: 10px;">No results published yet.</p>';
        }
    }

    // Custom Autocomplete Helper
    function attachAutocomplete(inputEl, getOptions, onSelect) {
        if (!inputEl) return;

        let listContainer = inputEl.nextElementSibling;
        if (!listContainer || !listContainer.classList.contains('autocomplete-list')) {
            listContainer = document.createElement('div');
            listContainer.className = 'autocomplete-list glass-panel';
            listContainer.style.cssText = 'display:none; position:absolute; width:100%; max-height:200px; overflow-y:auto; z-index:1000; padding:5px; margin-top:5px; border-radius:8px; box-shadow:0 4px 15px rgba(0,0,0,0.5);';
            inputEl.parentNode.style.position = 'relative';
            inputEl.parentNode.appendChild(listContainer);
        }

        let activeIndex = 0;
        let currentMatches = [];

        function renderList() {
            listContainer.innerHTML = '';
            if (currentMatches.length === 0) {
                listContainer.style.display = 'none';
                return;
            }

            currentMatches.forEach((match, index) => {
                const div = document.createElement('div');
                div.style.cssText = 'padding:10px 15px; cursor:pointer; color:#fff; border-radius:6px; transition: background 0.2s;';
                if (index === activeIndex) {
                    div.style.background = 'rgba(255,255,255,0.2)';
                } else {
                    div.style.background = 'transparent';
                }

                div.textContent = match;

                div.addEventListener('mouseenter', () => {
                    activeIndex = index;
                    renderList();
                });

                div.addEventListener('mousedown', function (e) {
                    e.preventDefault(); // prevent blur
                    selectItem(match);
                });
                listContainer.appendChild(div);
            });

            listContainer.style.display = 'block';

            // Scroll into view if needed
            const activeDiv = listContainer.children[activeIndex];
            if (activeDiv) {
                activeDiv.scrollIntoView({ block: 'nearest' });
            }
        }

        function showOptions(filterText = '') {
            const options = getOptions();
            currentMatches = options.filter(opt => opt.toLowerCase().includes(filterText.toLowerCase()));
            activeIndex = 0; // Default to top match
            renderList();
        }

        function selectItem(match) {
            inputEl.value = match;
            listContainer.style.display = 'none';
            inputEl.dispatchEvent(new Event('input')); // trigger update
            if (onSelect) onSelect(match);
        }

        inputEl.addEventListener('input', function () {
            showOptions(this.value);
            if (onSelect) onSelect(this.value);
        });

        inputEl.addEventListener('focus', function () {
            showOptions(this.value);
        });

        inputEl.addEventListener('keydown', function (e) {
            if (listContainer.style.display === 'none' || currentMatches.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIndex = (activeIndex + 1) % currentMatches.length;
                renderList();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIndex = (activeIndex - 1 + currentMatches.length) % currentMatches.length;
                renderList();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                selectItem(currentMatches[activeIndex]);
            }
        });

        inputEl.addEventListener('blur', function () {
            setTimeout(() => listContainer.style.display = 'none', 150);
        });

        // Disable native autocomplete
        inputEl.setAttribute('autocomplete', 'off');
    }

    // --- Result Entry Form Logic ---
    const categorySelect = document.getElementById('result-category-select');
    const programSelect = document.getElementById('result-program-select');

    if (categorySelect && programSelect) {

        // Attach Category Autocomplete
        attachAutocomplete(categorySelect,
            () => programCategories.map(c => c.name),
            (val) => {
                document.getElementById('poster-category').textContent = val || "Category";

                const catData = programCategories.find(c => c.name === val);
                if (!catData) {
                    programSelect.disabled = true;
                    programSelect.value = '';
                    programSelect.placeholder = "Select Category First...";
                    document.getElementById('poster-program').textContent = "PROGRAM NAME";
                } else {
                    programSelect.disabled = false;
                    programSelect.placeholder = "Type to search Program...";
                }
            }
        );

        // Attach Program Autocomplete
        attachAutocomplete(programSelect,
            () => {
                const catVal = categorySelect.value;
                const catData = programCategories.find(c => c.name === catVal);
                return catData ? catData.items : [];
            },
            (val) => {
                const displayName = val ? val.replace(/^\d+\.\s*/, '') : "PROGRAM NAME";
                document.getElementById('poster-program').textContent = displayName;
            }
        );

        // Result Number Binding
        const resultNumberInput = document.getElementById('result-number-input');
        if (resultNumberInput) {
            resultNumberInput.addEventListener('input', (e) => {
                document.getElementById('poster-result-label').textContent = e.target.value || "Result 1";
            });
        }

        // Track counts per place for duplicates
        const placeCounts = { 1: 1, 2: 1, 3: 1 };

        function bindWinnerRow(place, index) {
            const nameInput = document.getElementById(index === 1 ? `entry-name-${place}` : `entry-name-${place}-${index}`);
            const unitInput = document.getElementById(index === 1 ? `entry-unit-${place}` : `entry-unit-${place}-${index}`);

            const posterName = document.getElementById(index === 1 ? `poster-name-${place}` : `poster-name-${place}-${index}`);
            const posterUnit = document.getElementById(index === 1 ? `poster-unit-${place}` : `poster-unit-${place}-${index}`);

            if (nameInput && posterName) {
                nameInput.addEventListener('input', (e) => {
                    posterName.textContent = e.target.value || "Name";
                });
            }
            if (unitInput && posterUnit) {
                attachAutocomplete(unitInput,
                    () => systemUnits,
                    (val) => {
                        posterUnit.textContent = val || "Unit";
                    }
                );
            }
        }

        // Bind initial rows
        for (let i = 1; i <= 3; i++) {
            bindWinnerRow(i, 1);
        }

        // Add Winner Buttons
        const addButtons = document.querySelectorAll('.add-winner-btn');
        addButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const place = btn.getAttribute('data-place');
                placeCounts[place]++;
                const newIndex = placeCounts[place];

                // Clone Result Entry form row
                const placeBlock = btn.closest('.place-block');
                const firstRow = placeBlock.querySelector('.place-form-row');
                const newRow = firstRow.cloneNode(true);

                // Update IDs and clear values in cloned input
                const inputs = newRow.querySelectorAll('input');
                const newUnitSelect = inputs[0]; // Unit is first
                const newNameInput = inputs[1];  // Name is second

                newNameInput.id = `entry-name-${place}-${newIndex}`;
                newNameInput.value = '';
                newUnitSelect.id = `entry-unit-${place}-${newIndex}`;
                newUnitSelect.value = '';

                placeBlock.appendChild(newRow);

                // Clone Poster Row
                const posterContainer = document.getElementById(`poster-place-${place}-container`);
                const firstPosterRow = posterContainer.querySelector('.poster-winner-row');
                const newPosterRow = firstPosterRow.cloneNode(true);

                // Update IDs and clear values in cloned poster row
                const newPosterName = newPosterRow.querySelector('.p-name');
                const newPosterUnit = newPosterRow.querySelector('.p-unit');
                newPosterName.id = `poster-name-${place}-${newIndex}`;
                newPosterName.textContent = 'Name';
                newPosterUnit.id = `poster-unit-${place}-${newIndex}`;
                newPosterUnit.textContent = 'Unit';

                // We don't add top margin to cloned poster row if it's right under the first one?
                // Wait, the design has them closely stacked if they are tied, maybe 5px margin.
                newPosterRow.style.marginTop = '10px';

                posterContainer.appendChild(newPosterRow);

                // Bind the new inputs to the new poster elements
                bindWinnerRow(place, newIndex);
            });
        });

        // Handle Custom Background Upload
        const bgUploadInput = document.getElementById('bg-upload');
        if (bgUploadInput) {
            bgUploadInput.addEventListener('change', function (e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        document.getElementById('poster-canvas').style.backgroundImage = `url('${event.target.result}')`;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // --- WYSIWYG Element Editor ---
        const propFont = document.getElementById('prop-font');
        const propColor = document.getElementById('prop-color');
        const propSize = document.getElementById('prop-size');
        const propScale = document.getElementById('prop-scale');
        const propReset = document.getElementById('prop-reset');
        const propAlignLeft = document.getElementById('prop-align-left');
        const propAlignCenter = document.getElementById('prop-align-center');
        const propAlignRight = document.getElementById('prop-align-right');
        const propBold = document.getElementById('prop-bold');
        const propItalic = document.getElementById('prop-italic');

        let selectedElement = null;
        let isDragging = false;
        let startX, startY;
        let initialTranslateX = 0, initialTranslateY = 0;

        function getTransform(el) {
            const transform = window.getComputedStyle(el).getPropertyValue('transform');
            let mat = transform.match(/^matrix\((.+)\)$/);
            if (mat) {
                const vals = mat[1].split(', ');
                return { x: parseFloat(vals[4]), y: parseFloat(vals[5]) };
            }
            return { x: 0, y: 0 };
        }

        // We use dataset to store scale independent of translate
        function getScale(el) {
            return parseFloat(el.getAttribute('data-scale')) || 1.0;
        }

        document.addEventListener('mousedown', (e) => {
            const editable = e.target.closest('.editable-element');

            if (editable) {
                e.preventDefault(); // Prevent text selection
                if (selectedElement && selectedElement !== editable) {
                    selectedElement.style.outline = 'none';
                }
                selectedElement = editable;
                selectedElement.style.outline = '2px dashed #00e5ff';

                // Load properties into sidebar
                const compStyle = window.getComputedStyle(selectedElement);
                const rgb = compStyle.color.match(/\d+/g);
                if (rgb) {
                    const hex = "#" + ((1 << 24) + (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2])).toString(16).slice(1);
                    if (propColor) propColor.value = hex;
                }
                if (propSize) propSize.value = parseInt(compStyle.fontSize);
                if (propScale) propScale.value = getScale(selectedElement);

                // Set font dropdown
                if (propFont) {
                    const currentFont = compStyle.fontFamily.toLowerCase();
                    for (let i = 0; i < propFont.options.length; i++) {
                        if (currentFont.includes(propFont.options[i].text.toLowerCase())) {
                            propFont.selectedIndex = i;
                            break;
                        }
                    }
                }

                // Setup Drag
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                const currentTransform = getTransform(selectedElement);
                initialTranslateX = currentTransform.x;
                initialTranslateY = currentTransform.y;

            } else if (!e.target.closest('#element-properties-panel')) {
                // Clicked outside elements and sidebar
                if (selectedElement) {
                    selectedElement.style.outline = 'none';
                }
                selectedElement = null;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || !selectedElement) return;
            const isZoomed = document.getElementById('poster-canvas-wrapper').classList.contains('zoomed-out');
            const posterScale = isZoomed ? 0.5 : 1;

            const dx = (e.clientX - startX) / posterScale;
            const dy = (e.clientY - startY) / posterScale;

            const s = getScale(selectedElement);
            selectedElement.style.transform = `translate(${initialTranslateX + dx}px, ${initialTranslateY + dy}px) scale(${s})`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        if (propFont) {
            propFont.addEventListener('change', (e) => {
                if (selectedElement) {
                    selectedElement.style.fontFamily = e.target.value;
                    const children = selectedElement.querySelectorAll('*');
                    children.forEach(c => c.style.fontFamily = e.target.value);
                }
            });
        }
        if (propColor) {
            propColor.addEventListener('input', (e) => {
                if (selectedElement) {
                    selectedElement.style.color = e.target.value;
                    const children = selectedElement.querySelectorAll('*');
                    children.forEach(c => c.style.color = e.target.value);
                }
            });
        }
        if (propSize) {
            propSize.addEventListener('input', (e) => {
                if (selectedElement) {
                    selectedElement.style.fontSize = e.target.value + 'px';
                }
            });
        }
        if (propScale) {
            propScale.addEventListener('input', (e) => {
                if (selectedElement) {
                    const s = e.target.value;
                    selectedElement.setAttribute('data-scale', s);
                    const currentTransform = getTransform(selectedElement);
                    selectedElement.style.transform = `translate(${currentTransform.x}px, ${currentTransform.y}px) scale(${s})`;
                }
            });
        }
        if (propAlignLeft) {
            propAlignLeft.addEventListener('click', () => { if (selectedElement) selectedElement.style.textAlign = 'left'; });
        }
        if (propAlignCenter) {
            propAlignCenter.addEventListener('click', () => { if (selectedElement) selectedElement.style.textAlign = 'center'; });
        }
        if (propAlignRight) {
            propAlignRight.addEventListener('click', () => { if (selectedElement) selectedElement.style.textAlign = 'right'; });
        }
        if (propBold) {
            propBold.addEventListener('click', () => {
                if (selectedElement) {
                    const fw = window.getComputedStyle(selectedElement).fontWeight;
                    selectedElement.style.fontWeight = (fw === 'bold' || fw >= 600) ? 'normal' : 'bold';
                }
            });
        }
        if (propItalic) {
            propItalic.addEventListener('click', () => {
                if (selectedElement) {
                    const fs = window.getComputedStyle(selectedElement).fontStyle;
                    selectedElement.style.fontStyle = (fs === 'italic') ? 'normal' : 'italic';
                }
            });
        }

        if (propReset) {
            propReset.addEventListener('click', () => {
                if (selectedElement) {
                    selectedElement.setAttribute('data-scale', 1);
                    selectedElement.style.transform = 'translate(0px, 0px) scale(1)';
                    if (propScale) propScale.value = 1;
                } else {
                    // Reset all
                    document.querySelectorAll('.editable-element').forEach(el => {
                        el.setAttribute('data-scale', 1);
                        el.style.transform = 'translate(0px, 0px) scale(1)';
                    });
                }
            });
        }

        // --- Manage Units Logic ---
        const unitsTableBody = document.getElementById('units-table-body');
        const addUnitBtn = document.getElementById('add-unit-btn');

        function renderUnitsTable() {
            if (!unitsTableBody) return;
            unitsTableBody.innerHTML = '';
            systemUnits.forEach((unit, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${unit}</td>
                    <td>
                        <button class="action-btn edit" data-index="${index}"><i class="fas fa-pen"></i></button>
                        <button class="action-btn delete" data-index="${index}"><i class="fas fa-trash"></i></button>
                    </td>
                `;
                unitsTableBody.appendChild(tr);
            });

            // Bind Edit and Delete
            document.querySelectorAll('#units-table-body .edit').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = e.currentTarget.getAttribute('data-index');
                    const newName = prompt("Edit Unit Name:", systemUnits[idx]);
                    if (newName && newName.trim() !== '') {
                        systemUnits[idx] = newName.trim();
                        renderUnitsTable();
                    }
                });
            });

            document.querySelectorAll('#units-table-body .delete').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = e.currentTarget.getAttribute('data-index');
                    if (confirm(`Are you sure you want to delete ${systemUnits[idx]}?`)) {
                        systemUnits.splice(idx, 1);
                        renderUnitsTable();
                    }
                });
            });
        }

        if (addUnitBtn) {
            addUnitBtn.addEventListener('click', () => {
                const newUnit = prompt("Enter new unit name:");
                if (newUnit && newUnit.trim() !== '') {
                    systemUnits.push(newUnit.trim());
                    renderUnitsTable();
                }
            });
        }

        // Initial Render
        renderUnitsTable();

        // --- Export Poster Logic ---
        const downloadPosterBtn = document.getElementById('download-poster-btn');
        if (downloadPosterBtn) {
            downloadPosterBtn.addEventListener('click', () => {
                // Change button text to indicate processing
                const originalText = downloadPosterBtn.innerHTML;
                downloadPosterBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating JPG...';
                downloadPosterBtn.disabled = true;

                const posterSetup = document.getElementById('poster-setup');
                const posterCanvas = document.getElementById('poster-canvas');
                const posterWrapper = document.getElementById('poster-canvas-wrapper');

                // Save current state
                const wasHidden = posterSetup.classList.contains('hidden');
                const wasZoomed = posterWrapper.classList.contains('zoomed-out');

                // Prepare for pristine capture
                if (wasHidden) {
                    posterSetup.classList.remove('hidden');
                    posterSetup.style.position = 'absolute';
                    posterSetup.style.top = '-9999px'; // Move off-screen instead of visibility: hidden
                    posterSetup.style.left = '-9999px';
                    posterSetup.style.zIndex = '-100';
                }
                if (wasZoomed) {
                    posterWrapper.classList.remove('zoomed-out');
                }

                // Small delay to allow DOM to recalculate styles
                setTimeout(() => {
                    domtoimage.toJpeg(posterCanvas, { quality: 0.95, bgcolor: '#1a4d5c' })
                        .then(function (dataUrl) {
                            // Revert state
                            if (wasHidden) {
                                posterSetup.classList.add('hidden');
                                posterSetup.style.position = '';
                                posterSetup.style.top = '';
                                posterSetup.style.left = '';
                                posterSetup.style.zIndex = '';
                            }
                            if (wasZoomed) {
                                posterWrapper.classList.add('zoomed-out');
                            }

                            // Trigger download
                            const link = document.createElement('a');
                            const resultNum = document.getElementById('result-number-input') ? document.getElementById('result-number-input').value.trim() : 'Poster';
                            const safeName = resultNum.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                            link.download = `${safeName || 'poster'}.jpg`;
                            link.href = dataUrl;
                            link.click();

                            // Restore button
                            downloadPosterBtn.innerHTML = originalText;
                            downloadPosterBtn.disabled = false;
                        })
                        .catch(function (error) {
                            console.error('Error generating poster:', error);
                            alert('Failed to generate poster. Please try again.');
                            downloadPosterBtn.innerHTML = originalText;
                            downloadPosterBtn.disabled = false;
                        });
                }, 150);
            });
        }
    }
});

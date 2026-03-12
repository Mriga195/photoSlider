# Photo Slideshow Application - Learning Project Documentation
## India Skills 2025 Nationals Preparation

---

## Project Overview

This is a **Photo Slideshow Tool** built with React that teaches all core competencies tested in Module B (Frontend). The project involves creating an interactive image carousel with multiple themes, playback modes, configuration panels, and advanced UI patterns.

**Total Marks Breakdown:**
- Loading image files: 4.00 marks
- Ordering photos: 2.00 marks
- Slides Operating: 4.50 marks
- Theme: 10.00 marks
- Command Bar: 3.50 marks
- **Total: 24.00 marks**

---

## Phase 1: Foundation & Setup (Marks: 0 - Foundation)

### Learning Objectives
- Set up React project structure
- Understand state management for complex applications
- Plan component architecture
- Learn about localStorage for persistence

### What You'll Build
1. **Project Structure**
   - Create React app with Vite or Create React App
   - Organize folders: `/components`, `/styles`, `/utils`, `/hooks`
   - Set up environment for image handling

2. **Core State Management**
   - Learn to structure state for:
     - Photos array (with metadata)
     - Current slide index
     - Playback mode (manual/auto/random)
     - Current theme
     - Settings (intervals, speeds, dark mode)
   - Understand when to use `useState` vs custom hooks

3. **LocalStorage Integration**
   - Create utility functions to save/load user preferences
   - Learn about serialization and deserialization
   - Handle edge cases (corrupted data, first-time users)
   - Restore settings on app reload

4. **Dummy Data Setup**
   - Create sample photo URLs (use placeholder services like Picsum.photos)
   - Define photo object structure:
     ```
     {
       id: unique_id,
       src: image_url,
       filename: original_filename,
       caption: auto_or_custom_caption,
       customCaption: user_provided_caption
     }
     ```

### Key Concepts to Learn
- React component lifecycle
- Effect hooks for persistence
- State lifting
- Custom hooks for reusable logic

---

## Phase 2: Image Loading & Management (Marks: 4.00)

### Learning Objectives
- Handle file drag-and-drop
- Process image files
- Implement duplicate detection
- Generate captions from filenames

### What You'll Build

#### 2.1 Drag-and-Drop Zone Component
- Create a dropzone area for dragging image files
- Handle `onDragOver`, `onDragLeave`, `onDrop` events
- Visual feedback (highlight when dragging over)
- Display instructions to user

#### 2.2 File Processing
- Extract file information:
  - Filename
  - File size
  - File type validation (only images)
- Create object URLs for preview
- Handle multiple files at once

#### 2.3 Caption Generation Algorithm
- **Rules to implement:**
  - Remove file extension
  - Handle slugs with hyphens: convert to spaces
  - Capitalize first letter of each word
  - Examples:
    - `hello.jpg` → `Hello`
    - `hello-world.jpg` → `Hello World`
    - `a-sample-photo.jpg` → `A Sample Photo`

#### 2.4 Duplicate Image Detection
- **Implement detection by:**
  - File content (compare image bytes)
  - Filename (check if filename already exists)
- Remove duplicates automatically
- Show user notification when duplicates are removed

#### 2.5 Load Sample Photos Button
- Add button to load predefined sample images
- Use placeholder service (Picsum.photos or similar)
- Populate with 5-6 sample photos

### Key Concepts to Learn
- File API and Blob handling
- Regular expressions for caption formatting
- Array deduplication algorithms
- Async file reading

---

## Phase 3: Photo Ordering & Management (Marks: 2.00)

### Learning Objectives
- Implement drag-and-drop reordering
- Create shuffle functionality
- Build list UI for photo management

### What You'll Build

#### 3.1 Photo List Component
- Display thumbnails of all loaded photos
- Show captions below each thumbnail
- Indicate current active photo
- Show photo count

#### 3.2 Drag-and-Drop Reordering
- Make photo items draggable
- Implement drop zones between items
- Visual feedback during drag (hover effect, insertion line)
- Update photo array order on drop
- Maintain state after reorder

#### 3.3 Shuffle Button
- Add button to randomly shuffle photo order
- Use Fisher-Yates shuffle algorithm
- Provide visual feedback (button animation or toast)

#### 3.4 Remove Photo Option
- Add delete button on each photo item
- Remove from photos array
- Update indices

### Key Concepts to Learn
- HTML5 Drag and Drop API
- Array manipulation and reordering
- List rendering with keys in React
- Algorithm implementation (shuffle)

---

## Phase 4: Slides Operating & Playback Modes (Marks: 4.50)

### Learning Objectives
- Implement three playback modes
- Handle keyboard controls
- Create playback controls UI
- Manage timing and intervals

### What You'll Build

#### 4.1 Manual Control Mode
- **Left Arrow Key (←):** Show previous photo
- **Right Arrow Key (→):** Show next photo
- Wrap around: last photo → first photo (and vice versa)
- Keyboard event listeners
- Button controls (Previous/Next buttons)

#### 4.2 Auto-Playing Mode
- Photos change automatically at set interval
- Loop back to first photo after last
- **Configurable interval:** 1-30 seconds
- Use slider or input field to adjust

#### 4.3 Random Playing Mode
- Randomly select next photo
- Runs continuously (doesn't end)
- Uses same configurable interval as auto-play
- Never shows same photo twice in a row (optional enhancement)

#### 4.4 Playback Controls UI
- **Mode Selector:** Radio buttons or tabs for three modes
- **Slide Duration:** Slider (1-30 seconds) with number display
- **Pause/Play Buttons:** Toggle playback state
- **Full Screen Button:** Enter fullscreen mode

#### 4.5 Slide Duration Configuration
- Slider input: 1-30 seconds
- Or number input field
- Real-time update of interval
- Show current value

#### 4.6 Slide Scrolling Speed
- Animation duration for transitions
- Adjustable speed (0.3s - 2s typically)
- Affects theme animations

#### 4.7 Full Screen Mode
- Implement full screen API
- Hide browser toolbar and taskbar
- Exit on ESC key
- Show/hide controls overlay on mouse movement

### Key Concepts to Learn
- `useInterval` or `setInterval` with cleanup
- Keyboard event handling
- State synchronization for timing
- Full Screen API
- Managing intervals with state

---

## Phase 5: Theme System (Marks: 10.00) - LARGEST Component

### Learning Objectives
- Create dynamic theme switching
- Implement CSS animations
- Design appealing transitions
- Build theme-specific logic

### What You'll Build

#### 5.1 Theme A - Simple Display
**Logic:**
- Display photo and caption directly
- No animations or effects
- Instant transition between photos
- Baseline simplicity

**Implementation:**
- Straightforward image render
- Plain caption display
- No CSS keyframes needed

#### 5.2 Theme B - Horizontal Slide
**Logic:**
- Photo enters from **left**, moves to **center**, then exits to **right**
- Caption follows the same left-to-right path
- Caption animation starts **300ms after photo** animation

**Visual Flow:**
1. Photo starts off-screen (left: -100%)
2. Animates to center (left: 50%)
3. Continues to right (left: 100%)
4. Caption follows 300ms delayed

**CSS Requirements:**
- `@keyframes` for photo entrance and exit
- `@keyframes` for caption entrance and exit
- Animation timing and delays
- Separate animation state for photo vs caption

#### 5.3 Theme C - Vertical Slide
**Logic:**
- Photo enters from **bottom**, moves to **center**, then exits to **top**
- Caption is **split into individual words**
- Each word animates up with **300ms delay between words**

**Visual Flow:**
1. Photo starts below screen (top: 100%)
2. Animates to center (top: 50%)
3. Continues upward (top: -100%)
4. Caption words animate sequentially:
   - Word 1: starts at 0ms
   - Word 2: starts at 300ms
   - Word 3: starts at 600ms
   - etc.

**CSS Requirements:**
- `@keyframes` for vertical movement
- Word-by-word animation logic (JavaScript)
- Staggered animation delays
- Individual word styling

#### 5.4 Theme D - Custom Creative Theme
**Your Design:** Create an original, appealing theme with:
- Unique photo transition effect (examples):
  - Diagonal slide
  - Scale + fade
  - Rotation + slide
  - 3D flip effect
  - Zoom with blur
  - Corner-based entry
- Custom caption animation (examples):
  - Letter-by-letter animation
  - Fade + slide combination
  - Wave effect
  - Skew transformation
  - Character stagger

**Implementation Strategy:**
- Choose an effect you find visually appealing
- Document the animation flow
- Create corresponding keyframes
- Ensure smooth 60fps performance

#### 5.5 Theme Switching
- Radio buttons or dropdown to select A-D themes
- Immediate switch to selected theme
- Applied to current and next photos
- Save selected theme to localStorage

#### 5.6 CSS Organization
- Create separate CSS files:
  - `theme-a.css`
  - `theme-b.css`
  - `theme-c.css`
  - `theme-d.css`
  - `themes-common.css` (shared animations)
- Or use CSS modules:
  - `ThemeA.module.css`
  - `ThemeB.module.css`
  - etc.
- Import based on selected theme

### Key Concepts to Learn
- CSS `@keyframes` animations
- Animation timing functions (`ease-in-out`, `cubic-bezier`)
- Animation delays and stagger effects
- CSS variable usage for dynamic values
- Component composition for theme rendering
- Performance optimization for animations

---

## Phase 6: Display Settings & Dark Mode (Marks: Part of Configuration)

### Learning Objectives
- Implement light/dark mode toggle
- Manage theme state
- Apply styles dynamically
- Persist theme preference

### What You'll Build

#### 6.1 Dark Mode Toggle
- Add toggle switch/button in configuration panel
- Switch between light and dark themes
- Apply to entire UI:
  - Background colors
  - Text colors
  - Card/panel colors
  - Accent colors

#### 6.2 Color Scheme Management
- Define color variables for light mode
- Define color variables for dark mode
- Use CSS variables:
  ```
  --bg-primary
  --bg-secondary
  --text-primary
  --text-secondary
  --border-color
  --accent-color
  ```
- Toggle class on root element (e.g., `.dark-mode`)

#### 6.3 Persistence
- Save dark mode preference to localStorage
- Restore on app reload
- Respect system preference (optional enhancement)

### Key Concepts to Learn
- CSS custom properties (variables)
- Class-based styling
- Context API for theme management (optional)

---

## Phase 7: Command Bar (Marks: 3.50)

### Learning Objectives
- Create command palette UI
- Implement keyboard navigation
- Build command execution system
- Handle keyboard shortcuts

### What You'll Build

#### 7.1 Command Bar Activation
- **Keyboard Shortcuts:**
  - `CTRL+K` (Windows/Linux)
  - `CMD+K` (Mac) - handle both
  - `/` key
- Toggle command bar visibility
- Close on `ESC` key

#### 7.2 Command Bar UI
- Positioned in **center of screen**
- Dark background with **dimmed overlay** on rest of page
- Input field for search/filtering
- List of available commands below input
- Styled like modern command palettes (Raycast, VS Code, etc.)

#### 7.3 Command List & Navigation
- Display all available commands:
  1. Change to manual control mode
  2. Change to auto-playing mode
  3. Change to random playing mode
  4. Switch to theme A
  5. Switch to theme B
  6. Switch to theme C
  7. Switch to theme D
  8. Toggle light and dark mode
  9. Shuffle photos
  10. Pause slideshow
  11. Play slideshow

#### 7.4 Keyboard Navigation
- **Up Arrow (↑):** Select previous command
- **Down Arrow (↓):** Select next command
- **ENTER:** Execute selected command
- **ESC:** Close command bar
- Wrap around at ends (last → first, first → last)

#### 7.5 Visual Feedback
- Highlight selected command
- Show icons or indicators for command type
- Real-time filtering based on input text
- Show keyboard shortcut hints (optional)

#### 7.6 Command Execution
- Map each command to corresponding app action
- Update state appropriately
- Close command bar after execution
- Show success feedback (toast, flash, etc.)

#### 7.7 Search/Filter
- Filter commands based on input text
- Fuzzy search (optional enhancement)
- Case-insensitive matching

### Key Concepts to Learn
- Keyboard event handling
- Modal/overlay patterns
- List state management
- Command pattern implementation
- Focus management
- Event propagation and prevention

---

## Phase 8: Configuration Panel (Supporting All Features)

### Learning Objectives
- Create organized settings UI
- Manage multiple configuration options
- Build reusable form components

### What You'll Build

#### 8.1 Panel Layout
Organized sections for:
1. **Playback Mode**
   - Radio buttons: Manual / Auto / Random

2. **Theme Selection**
   - Radio buttons or dropdown: A / B / C / D

3. **Photo Management**
   - Photo list with drag-drop reordering
   - Shuffle button
   - Remove photo buttons

4. **Playback Settings**
   - Slide Duration slider (1-30s)
   - Slide Scrolling Speed slider (0.3-2s)
   - Pause/Play buttons

5. **Display Settings**
   - Dark mode toggle

#### 8.2 Component Design
- Collapsible sections (optional)
- Clear labels and descriptions
- Visual grouping with spacing
- Responsive layout

### Key Concepts to Learn
- Form state management
- Controlled components
- Component composition
- UI organization patterns

---

## Phase 9: Advanced Features & Polish

### Optional Enhancements (Not Required, but Competitive Advantage)

1. **Custom Captions Editing**
   - Click on caption to edit
   - Save custom caption
   - Toggle between auto-generated and custom

2. **Keyboard Shortcuts Help**
   - Display help modal showing all shortcuts
   - Accessible via `/help` in command bar

3. **Photo Context Menu**
   - Right-click on photo for options
   - Edit caption, delete, move to top, etc.

4. **Keyboard Hints**
   - Show hints for Left/Right arrow keys in manual mode
   - Contextual help

5. **Visual Indicators**
   - Show current slide number (e.g., "3 of 12")
   - Slide counter or progress bar

6. **Accessibility**
   - ARIA labels
   - Keyboard navigation for all features
   - High contrast dark mode option

7. **Performance Optimization**
   - Lazy load images
   - Debounce settings changes
   - Optimize animations for 60fps

---

## Learning Path & Timeline

### Recommended Order of Implementation

**Week 1-2: Foundation (Phase 1)**
- Set up React project
- Understand state structure
- Implement localStorage utility

**Week 2-3: Image Loading (Phase 2)**
- Build drag-drop zone
- Implement caption generation
- Add duplicate detection
- Load sample photos

**Week 3: Photo Ordering (Phase 3)**
- Build photo list UI
- Implement drag-drop reordering
- Add shuffle functionality

**Week 4: Playback Modes (Phase 4)**
- Implement manual mode with keyboard
- Build auto-play mode
- Create random mode
- Add playback controls UI

**Week 5: Configuration Panel (Phase 8)**
- Build configuration UI
- Connect all controls
- Test all interactions

**Week 6-7: Themes (Phase 5) - LARGEST EFFORT
- Implement Theme A (simple)
- Implement Theme B (horizontal)
- Implement Theme C (vertical)
- Create Theme D (custom)
- Polish animations

**Week 8: Command Bar (Phase 7)**
- Build command palette UI
- Implement keyboard navigation
- Connect to all commands

**Week 9: Display Settings (Phase 6)**
- Implement dark mode
- Add toggle switch
- Test persistence

**Week 10: Testing & Polish**
- Test all features
- Cross-browser testing
- Performance optimization
- Documentation

---

## Key Technical Concepts Tested

### React Fundamentals
- Component composition
- State management (`useState`, `useContext`)
- Effects and cleanup (`useEffect`)
- Event handling
- Controlled components
- Conditional rendering

### Browser APIs
- File API (FileReader, Blob, Object URLs)
- Drag and Drop API
- Keyboard events
- LocalStorage API
- Full Screen API
- RequestAnimationFrame (optional)

### CSS & Animations
- CSS Keyframe animations
- Animation timing and delays
- CSS variables
- Responsive design
- Flexbox/Grid for layout
- Transform and transition properties

### JavaScript Patterns
- Array methods (map, filter, reduce, splice)
- String manipulation (regex, split, join)
- Object handling
- Closures and scope
- Event delegation
- Debouncing/throttling

### Problem Solving
- Algorithm implementation (shuffle, duplicate detection)
- State synchronization
- Timing and intervals
- Complex UI state management

---

## Testing Checklist

### Phase 2 (Image Loading)
- [ ] Drag multiple images
- [ ] Caption generated correctly for all naming patterns
- [ ] Duplicate images are removed
- [ ] Sample photos load
- [ ] Images persist in localStorage

### Phase 3 (Photo Ordering)
- [ ] Drag photos to reorder
- [ ] Visual feedback during drag
- [ ] Shuffle works randomly
- [ ] Remove photo works
- [ ] Order persists

### Phase 4 (Playback Modes)
- [ ] Manual mode with arrows works
- [ ] Auto-play loops correctly
- [ ] Random mode never repeats
- [ ] Interval adjustable
- [ ] Pause/play works
- [ ] Keyboard shortcuts work

### Phase 5 (Themes)
- [ ] Theme A displays photos
- [ ] Theme B animates horizontally
- [ ] Theme C animates vertically with word stagger
- [ ] Theme D custom animation works
- [ ] Theme switching is instant
- [ ] Animations smooth (60fps)

### Phase 6 (Dark Mode)
- [ ] Toggle switches properly
- [ ] Colors change across all UI
- [ ] Persists on reload

### Phase 7 (Command Bar)
- [ ] Opens with CTRL+K and /
- [ ] Closes with ESC
- [ ] Navigation with arrow keys works
- [ ] All commands execute correctly
- [ ] Input filters commands

---

## Important Notes for India Skills Nationals

1. **CSS Organization is Critical**
   - Each theme should have separate CSS file
   - Shows understanding of maintainability and separation of concerns
   - Judge this heavily based on specification

2. **Theme Animations are Highest Value**
   - Theme is worth 10 marks (42% of total)
   - Invest most effort here
   - Theme D creative theme can differentiate you
   - Smooth animations at 60fps are important

3. **Command Bar is Advanced**
   - Worth 3.5 marks but shows advanced UI patterns
   - Demonstrates understanding of keyboard handling and UX
   - Polish here impresses judges

4. **File Organization**
   - Clear folder structure
   - Modular components
   - Shows professional development practices

5. **LocalStorage Persistence**
   - Required but easily forgotten
   - Must save and restore all settings
   - Test by reloading page

6. **Browser Compatibility**
   - Test in Firefox Developer Edition and Chrome
   - Both are used for assessment
   - Ensure all features work in both

7. **README Documentation**
   - Provide instructions for running project
   - Explain project structure
   - List all features
   - Document how to load sample images

---

## Resources & Learning

### HTML5 Drag and Drop API
- MDN: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

### CSS Animations
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations

### File API
- MDN: https://developer.mozilla.org/en-US/docs/Web/API/File

### React Hooks
- Official Docs: https://react.dev/reference/react

### LocalStorage
- MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

---

## Success Criteria

A successful implementation will have:

✅ **Phase 2:** Images load via drag-drop, captions auto-generate correctly, duplicates removed  
✅ **Phase 3:** Photos reorder with drag-drop, shuffle works  
✅ **Phase 4:** Three playback modes work, keyboard controls responsive  
✅ **Phase 5:** All four themes implemented, smooth animations, custom theme creative  
✅ **Phase 6:** Dark mode toggles and persists  
✅ **Phase 7:** Command bar functional with all 11 commands  
✅ **Phase 8:** Configuration panel connects all features  
✅ **General:** Code organized, localStorage working, tested in both browsers

Good luck with India Skills 2025 Nationals! 🚀

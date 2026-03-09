# Phone Widget & Activity Workflow

A single-page web app combining a **Phone Widget** design and an **Activity Workflow** for planning activities, tracking sessions, and staying connected with friends. 

## Features

### Phone Widget
- **Home** — Profile card (“Hi Bob!”), status (Online, Do Not Disturb, Idle, Free to Talk), and a grid of friends with online/away/silent indicators
- **Calendar** — Week view with sample activities (study sessions, trivia, gym, coffee, gaming, etc.) and gradient-colored event cards
- **Add Activity** — Form to create activities with title, description, time range, and friend selection
- **Polls** — Create polls with up to 3 options and an image picker; view previous poll responses with percentage bars
- **Profile & Friends** — Profile settings modal and friend profile modals with contact info

### Activity Workflow
- **Activity selection** — Choose activity type (Study, Gaming, etc.) with custom gradients and icons
- **Session setup** — Set goal duration (hours/minutes), invite friends from a list
- **Timer** — Run/pause session timer with elapsed time and break count
- **Break timer** — Optional break with configurable duration and alert
- **End session** — Summary dialog when finishing a session

## Tech Stack

- **HTML5** — Single `combined.html` file
- **Tailwind CSS** — Via CDN
- **Vanilla JavaScript** — No framework; state in `WS` (widget) and `FL` (workflow)
- **CSS** — Custom animations (fade, slide, scale, toast, confetti), dark theme, custom scrollbar

## How to Run

1. Clone or download this repo.
2. Open `combined.html` in a modern browser (Chrome, Firefox, Safari, Edge).

No build step or server required — the app loads Tailwind from the CDN and runs entirely in the browser.

## Project Structure

```
.
├── README.md
└── combined.html    # All UI, styles, and logic in one file
```

## License

Use as needed for course or personal projects.

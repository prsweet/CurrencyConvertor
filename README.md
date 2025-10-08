## Currency Converter

Simple browser-based currency converter built with vanilla JavaScript and Tailwind CSS. It fetches live exchange rates and converts an input amount between selected currencies.

### Features
- **Live rates**: Fetches latest rates from `exchangerate-api.com`
- **Two-way selection**: Choose both source (From) and target (To) currencies
- **Instant result**: Converts and displays the formatted output
- **Responsive UI**: Styled with Tailwind CSS

### Tech Stack
- **HTML/CSS/JavaScript** (no framework)
- **Tailwind CSS v4** (via `@tailwindcss/cli`)

### File Overview
- `index1.html`: Main page and UI markup
- `script1.js`: Logic to fetch currencies and perform conversion
- `input1.css`: Tailwind entry file (imports Tailwind)
- `output1.css`: Built CSS consumed by the page
- `package.json`: Tailwind CLI dependencies

### Prerequisites
- Node.js 18+ recommended

### Quick Start (no build needed)
The repo already includes a compiled `output1.css`. You can open the app directly:

1. Open `index1.html` in your browser
2. Enter an amount, pick currencies, and click Convert

### Rebuild CSS (optional)
If you edit `input1.css` or want to regenerate `output1.css`, install dependencies and run the Tailwind CLI build:

```bash
cd currency_convertor
npm install
npx @tailwindcss/cli -i ./input1.css -o ./output1.css --minify
```

### How It Works
1. On page load, the app fetches `https://api.exchangerate-api.com/v4/latest/USD` and populates the currency dropdowns
2. On Convert, it fetches `https://api.exchangerate-api.com/v4/latest/{FROM}` to get the rate for `{TO}`
3. It multiplies the input amount by the selected rate and displays the result

### Notes
- **Network access**: The app calls `exchangerate-api.com`. If the API is down or rate-limited, conversion will fail.
- **Validation**: Negative amounts are rejected; ensure you enter a non-negative number.
- **CORS/Local files**: Opening `index1.html` directly in a modern browser should work. If your browser blocks network calls from file URLs, serve the folder via a simple static server (e.g., `npx http-server .`).

### Example
If `FROM = USD`, `TO = EUR`, and the rate is `0.92`:

```
10 USD = 9.20 EUR
```

### License
ISC (see `package.json`).



# ai-powered-app

# AI Chatbot - WonderWorld Theme Park

This project includes a customer support chatbot designed specifically for WonderWorld, a premier theme park destination.

## Chatbot Overview

The WonderWorld chatbot acts as a cheerful and knowledgeable customer support agent, ready to assist visitors with any questions related to the park. It provides accurate information based on official park details and ensures a friendly user experience.

### Key Features

- **Park Information:** Answers questions about WonderWorld, including attractions, amenities, and events.
- **Ticket Assistance:** Provides the official ticketing link ([http://wonderworld.com/tickets](http://wonderworld.com/tickets)) when users inquire about buying tickets or ticket prices.
- **Ride Recommendations:** When asked about rides, the chatbot asks clarifying questions to better understand the user's preferences before suggesting options.
- **Cheerful Tone:** Always responds in a positive and helpful manner.
- **Information Accuracy:** Avoids making up information and only answers questions related to WonderWorld.

## Usage

To interact with the chatbot, simply ask any question related to WonderWorld. For example:

- "What are the opening hours?"
- "How do I buy tickets?"
- "Can you recommend rides for young children?"

The chatbot will respond with helpful and accurate information tailored to your needs.

## Customization

The chatbot uses a prompt template that can be updated with the latest park information by modifying the `{{parkInfo}}` variable in the prompt file.

---

For more details, see the `chatbot.txt` prompt file in the `/packages/server/prompts/` directory.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

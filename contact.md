---
layout: base.njk
---
# Contact me

Have any questions for me, or just want to drop me a message? Feel free to fill in the contact form below! 

<form action="POST" id="contact" class="form">
    <div class="field">
        <label for="name" class="field-label">Name</label>
        <input type="text" id="name" placeholder="Your name" class="field-input" />
    </div>
    <div class="field">
        <label for="email" class="field-label">Email address</label>
        <input type="email" id="email" placeholder="Your email e.g. test@example.com" class="field-input" />
    </div>
    <div class="field">
        <label for="message" class="field-label">Message</label>
        <textarea id="message" placeholder="Your message here..." class="field-textarea"></textarea>
    </div>
    <div class="no-display">
        <label for="rush">
            <input type="checkbox" id="rush" /> Click here if you're having a good day :)
        </label>
    </div>
    <div class="actions">
        <button type="submit" class="btn btn-primary">Send message</button>
        <button type="reset" class="btn btn-secondary">Reset form</button>
    </div>
</form>

Updated only the title element in [recycled-tote.html](recycled-tote.html#L5) to:

```html
<title>Recycled Cotton Tote, 15 Litre | LoopCarry</title>
```

The title uses the product name and capacity supported by product.md and the visible page copy, helping shoppers identify the product accurately.

PowerShell checks passed: exactly one title is present, reversing this replacement reproduces the original file byte for byte, and SHA-256 hashes confirm cart.html, product.md, and request.txt are unchanged. The description, canonical, robots directives, and all body content remain unchanged.

No build or live/deployment tests were available or performed. The local edit is verified; search appearance and purchase effects are unmeasured. To revert, restore `<title>Product | LoopCarry</title>`.

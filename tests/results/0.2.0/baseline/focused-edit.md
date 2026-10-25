Updated only the title in [recycled-tote.html](recycled-tote.html):

```html
<title>Recycled Cotton Tote (15 Litre) | LoopCarry</title>
```

It now identifies the product, capacity and brand using facts in [product.md](../../../fixtures/focused-edit/product.md), consistent with the page’s visible H1 and description. No unsupported product claims were added.

Checked with a local PowerShell script using file reads and SHA-256 hashes:

- Exactly one title element contains the new title: **passed**.
- Reversing just the title replacement reconstructs the original file bytes exactly: **passed**. All other HTML is unchanged.
- Hashes of `request.txt`, `product.md` and `cart.html` are unchanged: **passed**.

Status: **implemented and locally checked**. No build or runtime tests were necessary for this static title edit. No live checks or deployment were available. To undo it, restore `<title>Product | LoopCarry</title>`.

# Workshop Registration System

## Overview
A complete registration system for the "Design & Development of Lateral Flow Immuno Assay" workshop with Razorpay payment integration.

## Features

### 1. **Dynamic Form Sections**
The form adapts based on the selected professional category:

- **Academics**: 
  - Support for 1+1 offer (₹12,000 per person for 2 students)
  - Bulk discount (₹10,000 per student for 15+ students)
  - Individual rate: ₹15,000

- **Start-ups**:
  - 2 persons allowed per registration
  - Fee: ₹25,000 + 18% GST = ₹29,500

- **Industry**:
  - 2 persons allowed per registration
  - Regular: ₹25,000 + 18% GST = ₹29,500
  - With Stall: ₹50,000 + 18% GST = ₹59,000

### 2. **Payment Integration**
- Razorpay payment gateway integration
- Secure online payment processing
- Payment screenshot upload option
- Bank transfer details provided

### 3. **Form Features**
- Real-time validation
- File upload (max 268.44MB)
- GST number collection
- Declaration checkbox
- Responsive design

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Razorpay
1. Sign up at [Razorpay](https://razorpay.com/)
2. Get your API keys from the dashboard
3. Create `.env.local` file:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 3. Add Workshop Banner Image
Place your workshop banner image at:
```
/public/WhatsApp Image 2025-10-17 at 15.22.48_14737325.jpg
```

### 4. Run Development Server
```bash
npm run dev
```

Visit: `http://localhost:3000/registration`

## File Structure

```
/app/registration/page.tsx          # Main registration page
/components/WorkshopRegistrationForm.tsx  # Dynamic form component
/app/api/workshop-registration/route.ts   # Form submission API
/public/uploads/workshop-registrations/   # Uploaded payment screenshots
```

## Deployment to Vercel

### 1. Environment Variables
Add these to your Vercel project settings:
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

### 2. Deploy
```bash
# Commit changes
git add .
git commit -m "Add workshop registration system"

# Push to GitHub
git push origin main
```

Vercel will auto-deploy from your GitHub repository.

### 3. Verify Deployment
1. Check the deployment URL
2. Test the registration flow
3. Verify Razorpay integration works in production

## Testing

### Test Mode
Use Razorpay's test keys for development:
- Test Key ID starts with `rzp_test_`
- Use [test card numbers](https://razorpay.com/docs/payments/payments/test-card-details/)

### Production Mode
Switch to live keys:
- Live Key ID starts with `rzp_live_`
- Real payments will be processed

## Future Enhancements

1. **Email Notifications**
   - Send confirmation emails to registrants
   - Send admin notifications
   - Integrate with SendGrid or AWS SES

2. **Database Integration**
   - Store registrations in MongoDB/PostgreSQL
   - Create admin dashboard
   - Export registration data

3. **Payment Verification**
   - Implement Razorpay webhook
   - Verify payment signatures
   - Handle payment failures

4. **Analytics**
   - Track registration metrics
   - Monitor payment success rates
   - Generate reports

## Bank Details

**Account holder name:** Tanu Lifesciences Pvt Ltd  
**Account Number:** 50200114023123  
**IFSC Code:** HDFC0000549  
**Bank:** HDFC Bank  
**UPI ID:** 9632189056@ibl

## Workshop Details

**Event:** Design & Development of Lateral Flow Immuno Assay  
**Date:** 22nd and 23rd of December 2025  
**Venue:** The University of Trans-Disciplinary Health Sciences and Technology (TDU), Bengaluru

**Inclusions:**
- Lunch & High tea (2 times daily)
- Notebook, pen, printed notes
- Certificate from Industry experts

## Support

For issues or questions, contact:
- Email: [workshop contact email]
- Phone: [workshop contact number]

## License

[Your License Here]

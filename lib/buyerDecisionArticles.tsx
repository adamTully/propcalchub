import type { Metadata } from 'next';
import AdSlot from '@/components/AdSlot';

type Table = {
  headers: string[];
  rows: string[][];
};

type Section = {
  id: string;
  heading: string;
  paragraphs: React.ReactNode[];
  table?: Table;
};

type Faq = {
  question: string;
  answer: string;
};

type ArticleMedia =
  | {
      type: 'video';
      url: string;
      embedUrl: string;
      channel: string;
    }
  | {
      type: 'resource';
      url: string;
      source: string;
      heading: string;
      text: string;
      linkLabel: string;
    };

export type BuyerDecisionArticle = {
  slug: string;
  title: string;
  metadataTitle: string;
  description: string;
  media: ArticleMedia;
  readingMinutes: number;
  wordCount: number;
  intro: React.ReactNode[];
  sections: Section[];
  faqs: Faq[];
  relatedLinks: { href: string; label: string }[];
  sources: { href: string; label: string }[];
  cta: React.ReactNode;
};

const siteUrl = 'https://www.propcalchub.com';
const authorName = 'PropCalcHub Editorial Team';
const disclaimer =
  'This article is for informational and planning purposes only and is not financial, tax, legal, lending, or real estate advice.';

export const buyerDecisionArticles: BuyerDecisionArticle[] = [
  {
    slug: 'earnest-money-vs-down-payment-vs-closing-costs',
    title: 'Earnest Money vs Down Payment vs Closing Costs',
    metadataTitle: 'Earnest Money vs Down Payment vs Closing Costs',
    description:
      'Learn the difference between earnest money, your down payment, and closing costs so you can avoid underestimating cash to close.',
    media: {
      type: 'resource',
      url: 'https://myhome.freddiemac.com/buying/understanding-costs',
      source: 'Freddie Mac',
      heading: 'Understand the major costs of buying a home',
      text:
        'Freddie Mac provides an educational overview of the upfront and ongoing costs buyers should prepare for, including down payment, closing costs, and escrow-related items.',
      linkLabel: "Read Freddie Mac's guide to homebuying costs",
    },
    readingMinutes: 9,
    wordCount: 1815,
    intro: [
      'Earnest money, a down payment, and closing costs are often discussed in the same conversation because all three affect buyer cash. They are not the same thing. Confusing them can make an offer feel affordable on paper while the actual cash needed at closing is much higher than expected.',
      <>
        The clean way to plan is to separate timing, purpose, refundability, and settlement treatment.
        Then use the{' '}
        <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
          Buyer Closing Cost Calculator
        </a>{' '}
        to estimate the final cash-to-close picture after deposits, credits, prepaids, and
        adjustments.
      </>,
    ],
    sections: [
      {
        id: 'why-confusing',
        heading: 'Why Buyers Confuse These Three Costs',
        paragraphs: [
          'Buyers usually hear about all three costs during the same emotional stretch: making an offer, applying for financing, and preparing for settlement. The words also overlap in casual conversation. Someone may say you need cash for closing and mean the down payment, closing costs, reserves, or all of the above.',
          'The settlement statement adds another layer. Earnest money paid earlier may show as a credit, the down payment is part of the purchase math, and closing costs include lender, title, government, prepaid, and escrow items. Cash to close is the final result after those pieces are netted together.',
        ],
      },
      {
        id: 'earnest-money',
        heading: 'What Earnest Money Is and When It Is Due',
        paragraphs: [
          'Earnest money is a buyer deposit that is typically paid after an offer is accepted. It shows the seller that the buyer is putting money behind the contract. The deposit is usually held by a third party such as a brokerage, title company, escrow company, or attorney, depending on local practice.',
          'The amount, due date, holder, and consequences are contract terms. There is no universal rule that applies to every transaction. A buyer should know when the deposit must be delivered and what proof of delivery is required.',
          'If the purchase closes, earnest money is commonly credited toward the buyer’s final cash obligation. That does not mean it disappears. It means money paid earlier reduces the amount still due at closing.',
        ],
      },
      {
        id: 'refundability',
        heading: 'When Earnest Money May or May Not Be Refundable',
        paragraphs: [
          'Earnest-money refundability depends on the purchase contract, deadlines, contingencies, state law, and facts of the cancellation. Inspection, financing, appraisal, title, or other contingencies may create paths for a buyer to cancel and recover the deposit if the buyer follows the contract.',
          'Missing a deadline, canceling for a reason not protected by the contract, or defaulting under the agreement may put the deposit at risk. The key planning point is not to assume earnest money is always refundable or always nonrefundable.',
          'Before making an offer, ask your agent or attorney to explain the contingency deadlines and deposit language in plain English. If there is a dispute, legal advice may be needed.',
        ],
      },
      {
        id: 'down-payment',
        heading: 'What a Down Payment Is',
        paragraphs: [
          'The down payment is the part of the purchase price the buyer pays without borrowing. A larger down payment generally reduces the loan amount. A smaller down payment generally increases the loan amount and may affect mortgage insurance, qualification, and monthly payment.',
          <>
            For the monthly-payment side, compare scenarios in the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            . For the settlement side, keep the down payment separate from closing costs so you do
            not undercount cash needed.
          </>,
        ],
      },
      {
        id: 'closing-costs',
        heading: 'What Buyer Closing Costs Include',
        paragraphs: [
          'Closing costs are transaction and financing expenses. They may include lender charges, appraisal, credit report, title services, recording fees, transfer-related charges, settlement or escrow fees, prepaid interest, homeowners insurance, tax reserves, and initial escrow deposits.',
          'Some costs are lender-controlled, some are third-party costs, and some are prepaid or reserve items. That is why a calculator estimate should be updated once you receive a Loan Estimate and later a Closing Disclosure.',
          <>
            For a deeper look at prepaids and reserves, read{' '}
            <a href="/blog/prepaid-costs-and-escrow-deposits-explained" className="font-medium text-blue-600 underline">
              Prepaid Costs and Escrow Deposits Explained
            </a>
            .
          </>,
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Cash Still Due at Closing',
        paragraphs: [
          'Assume a $425,000 purchase. The buyer deposits $8,000 in earnest money after contract acceptance, plans a $42,500 down payment, has $11,200 in estimated buyer closing costs, $4,300 in prepaid and escrow items, and negotiates $5,000 in seller or lender credits.',
          'The buyer does not simply add every number together. Earnest money already paid and credits reduce the amount still due at closing.',
        ],
        table: {
          headers: ['Item', 'Example Amount', 'Cash-to-Close Treatment'],
          rows: [
            ['Purchase price', '$425,000', 'Sets the transaction size'],
            ['Earnest-money deposit', '$8,000', 'Paid earlier and credited at closing if the deal closes'],
            ['Down payment', '$42,500', 'Applied toward purchase price'],
            ['Estimated buyer closing costs', '$11,200', 'Added to cash obligation'],
            ['Prepaid items and escrow deposits', '$4,300', 'Added to cash obligation'],
            ['Seller or lender credits', '-$5,000', 'Reduces eligible cash due'],
            ['Earnest-money credit', '-$8,000', 'Reduces cash still needed at closing'],
            ['Estimated cash still due at closing', '$45,000', 'Illustrative final amount'],
          ],
        },
      },
      {
        id: 'comparison-table',
        heading: 'Side-by-Side Cost Category Comparison',
        paragraphs: [
          'This table helps separate purpose and timing. Local practice and contract language still matter, so treat it as a planning map rather than a universal rule.',
        ],
        table: {
          headers: [
            'Cost Category',
            'Primary Purpose',
            'Typical Timing',
            'Potentially Refundable?',
            'Included in Cash to Close?',
            'Important Notes',
          ],
          rows: [
            ['Earnest money', 'Shows serious intent and supports the contract', 'After offer acceptance', 'Depends on contract and contingencies', 'Usually credited if the deal closes', 'Held by a third party in many transactions'],
            ['Down payment', 'Reduces amount borrowed', 'At closing', 'No, if the purchase closes', 'Yes', 'Applied toward purchase price'],
            ['Closing costs', 'Pays transaction, lender, title, government, prepaid, and escrow items', 'At or before closing', 'Usually not after services are performed', 'Yes', 'Can change as estimates become final'],
          ],
        },
      },
      {
        id: 'timeline',
        heading: 'Timeline From Accepted Offer Through Closing',
        paragraphs: [
          'After offer acceptance, the contract may require earnest money quickly. During the loan process, the lender provides a Loan Estimate and the buyer orders inspections, insurance, title work, and other services. Near settlement, the Closing Disclosure and final settlement statement show the actual cash to close.',
          'The amount due can change because credits are added, deposits are credited, prepaid interest depends on the closing date, tax prorations are calculated, and title or recording numbers become final.',
        ],
      },
      {
        id: 'calculator',
        heading: 'How to Estimate Before Making an Offer',
        paragraphs: [
          <>
            Start with the purchase price and down payment in the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>
            . Then add estimated closing costs, prepaid items, and expected credits. Finally,
            subtract earnest money only if you are modeling cash still due at closing.
          </>,
          'Save a cushion. A buyer who can barely cover the estimate may be strained if insurance, taxes, title charges, or prepaid items come in higher than expected.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Earnest money, down payment, and closing costs all affect cash planning, but they answer different questions. Earnest money is a contract deposit, the down payment reduces the loan, and closing costs pay transaction expenses.',
          <>
            Estimate your likely cash-to-close range with the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            before you make an offer.
          </>,
        ],
      },
    ],
    faqs: [
      { question: 'Does earnest money reduce my down payment?', answer: 'It may reduce the cash still due at closing if credited, but it is not the same thing as the down payment.' },
      { question: 'Can earnest money be refunded?', answer: 'Sometimes. Refundability depends on the contract, contingencies, deadlines, and reason for cancellation.' },
      { question: 'Is the down payment part of closing costs?', answer: 'No. The down payment is applied toward the purchase price. Closing costs are transaction and financing expenses.' },
      { question: 'What money do I actually need to bring to closing?', answer: 'Cash to close is the final amount after down payment, closing costs, prepaids, credits, deposits, and adjustments are netted together.' },
      { question: 'What happens to earnest money if the transaction closes?', answer: 'It is commonly credited toward the buyer’s final cash obligation at closing.' },
      { question: 'What happens if the transaction is canceled?', answer: 'The contract controls what happens next. The deposit may be refundable, disputed, or released depending on the facts and contract terms.' },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/blog/prepaid-costs-and-escrow-deposits-explained', label: 'Prepaid Costs and Escrow Deposits Explained' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://myhome.freddiemac.com/buying/understanding-costs', label: 'Freddie Mac understanding homebuying costs' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'CFPB Closing Disclosure explainer' },
    ],
    cta: (
      <>
        Estimate your likely cash-to-close range with the{' '}
        <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
          Buyer Closing Cost Calculator
        </a>{' '}
        before you make an offer.
      </>
    ),
  },
  {
    slug: 'seller-credits-and-lender-credits-lower-cash-to-close',
    title: 'How Seller Credits and Lender Credits Lower Cash to Close',
    metadataTitle: 'How Seller Credits and Lender Credits Lower Cash to Close',
    description:
      'See how seller credits and lender credits affect upfront costs, interest rate tradeoffs, and what you need to bring to closing.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=1H452LuegO0',
      embedUrl: 'https://www.youtube.com/embed/1H452LuegO0',
      channel: 'Win The House You Love',
    },
    readingMinutes: 10,
    wordCount: 1995,
    intro: [
      'Seller credits and lender credits can both lower the amount a buyer brings to closing. That makes them attractive, especially when a buyer has enough income for the payment but wants to preserve cash for moving, repairs, or reserves.',
      'They are not interchangeable. Seller credits are negotiated in the purchase contract. Lender credits are part of loan pricing and may come with a higher rate. Both can reduce cash to close, but both have limits, tradeoffs, and paperwork details that matter.',
    ],
    sections: [
      {
        id: 'seller-credits',
        heading: 'What Seller Credits Are',
        paragraphs: [
          'A seller credit is an amount the seller agrees to contribute toward the buyer’s eligible closing costs or prepaid items. It is usually negotiated in the purchase contract or an amendment.',
          'Seller credits can help a buyer reduce cash due at settlement, but they generally cannot be used as unrestricted cash back. The credit needs eligible costs to offset, and loan-program rules may limit how much can be used.',
          <>
            Sellers should also understand that a credit can reduce net proceeds. The{' '}
            <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
              Seller Net Proceeds Calculator
            </a>{' '}
            can show the other side of the same negotiation.
          </>,
        ],
      },
      {
        id: 'lender-credits',
        heading: 'What Lender Credits Are',
        paragraphs: [
          'A lender credit is a credit from the lender that offsets some closing costs. It is often provided in exchange for accepting a higher interest rate than a no-credit option.',
          <>
            That makes lender credits closely related to the rate-pricing tradeoff explained in{' '}
            <a href="/blog/mortgage-points-vs-lender-credits" className="font-medium text-blue-600 underline">
              Mortgage Points vs Lender Credits
            </a>
            . A lender credit may help today’s cash problem while increasing the monthly payment.
          </>,
        ],
      },
      {
        id: 'cash-to-close',
        heading: 'How Credits Affect Estimated Cash to Close',
        paragraphs: [
          'Cash to close is not simply closing costs plus down payment. It is the final amount after the down payment, closing costs, prepaids, seller credits, lender credits, deposits, and prorations are combined.',
          'Credits reduce eligible costs, but they do not erase the need to bring a down payment unless the specific loan program and assistance structure allows a different source. Do not assume a seller credit can cover everything.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: $425,000 Purchase With Different Credits',
        paragraphs: [
          'These numbers are illustrative. Actual limits and eligible uses depend on loan program, lender, contract, and transaction structure.',
        ],
        table: {
          headers: [
            'Scenario',
            'Purchase Price',
            'Estimated Closing Costs',
            'Seller Credit',
            'Lender Credit',
            'Estimated Cash to Close',
            'Interest-Rate Tradeoff',
            'Monthly-Payment Consideration',
          ],
          rows: [
            ['No credits', '$425,000', '$14,500', '$0', '$0', '$57,000', 'None', 'Baseline payment'],
            ['Seller credit', '$425,000', '$14,500', '$7,500', '$0', '$49,500', 'None from lender credit', 'Payment unchanged unless price or loan terms change'],
            ['Lender credit', '$425,000', '$14,500', '$0', '$4,000', '$53,000', 'Likely higher rate', 'Higher monthly payment may offset cash saved over time'],
            ['Combined credits', '$425,000', '$14,500', '$6,000', '$3,000', '$48,000', 'Possible higher rate', 'Lower cash now, review long-term cost'],
          ],
        },
      },
      {
        id: 'eligible-expenses',
        heading: 'Which Expenses Credits May Cover',
        paragraphs: [
          'Credits commonly reduce lender fees, title and settlement charges, prepaid interest, homeowners insurance, property-tax reserves, and other eligible closing costs. The exact eligible categories depend on loan rules and how the credit is documented.',
          'If a credit exceeds eligible costs, the excess may not be usable. That is why credits need to be modeled against actual Loan Estimate and Closing Disclosure numbers, not just negotiated as a round number.',
        ],
      },
      {
        id: 'limits',
        heading: 'Loan-Program Guardrails at a High Level',
        paragraphs: [
          'Conventional, FHA, VA, USDA, jumbo, and portfolio loans can treat seller concessions differently. Down payment, occupancy, property type, and transaction structure may affect what is allowed.',
          'The safest wording in an offer is not only the credit amount but how it may be used. The lender should review the proposed credit before the buyer relies on it.',
          'Avoid universal concession-limit claims unless your lender has tied the limit to your exact program and scenario.',
        ],
      },
      {
        id: 'price-vs-credit',
        heading: 'Price Reduction Versus Seller Credit',
        paragraphs: [
          'A price reduction lowers the purchase price. A seller credit lowers eligible cash due at closing. A buyer short on cash may prefer the credit, while a buyer focused on long-term cost may prefer a lower price.',
          'The seller may view both as concessions, but the economics are not identical. A credit can make an offer more workable for a cash-constrained buyer, yet it can also affect appraisal or loan-approval discussions depending on the transaction.',
        ],
      },
      {
        id: 'compare',
        heading: 'How to Compare Short-Term and Long-Term Impact',
        paragraphs: [
          <>
            Use the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            for the upfront side and the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            for the monthly side.
          </>,
          <>
            Then compare the strongest offer with the disclosure-focused workflow in{' '}
            <a href="/blog/how-to-compare-loan-estimates" className="font-medium text-blue-600 underline">
              How to Compare Loan Estimates Like a Pro
            </a>
            .
          </>,
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Credits can make a purchase possible, but they are not magic. Seller credits are negotiated. Lender credits are priced into the loan. Both should be reviewed against eligible costs and the long-term payment.',
          <>
            Plug in your purchase assumptions, then subtract expected credits in the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      { question: 'Are lender credits free?', answer: 'No. They usually reduce upfront costs in exchange for a higher interest rate or other loan-pricing tradeoff.' },
      { question: 'Can seller credits cover my down payment?', answer: 'Generally, seller credits are for eligible closing costs and prepaids, not unrestricted down-payment cash. Loan rules matter.' },
      { question: 'Are seller credits limited?', answer: 'Yes, limits can depend on loan program, occupancy, down payment, property type, and transaction details.' },
      { question: 'Should I ask for a price reduction instead?', answer: 'It depends on whether your priority is lower cash to close or lower long-term cost.' },
      { question: 'Can seller and lender credits be combined?', answer: 'Often they can, but the total usable amount depends on eligible costs and loan-program rules.' },
      { question: 'What happens if the credit is larger than eligible closing costs?', answer: 'The excess may be unusable or require contract or loan changes. Confirm with the lender before relying on it.' },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/mortgage-points-vs-lender-credits', label: 'Mortgage Points vs Lender Credits' },
      { href: '/blog/how-to-compare-loan-estimates', label: 'How to Compare Loan Estimates Like a Pro' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
      { href: 'https://selling-guide.fanniemae.com/', label: 'Fannie Mae Selling Guide' },
      { href: 'https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1', label: 'HUD FHA Single Family Housing Policy Handbook' },
    ],
    cta: (
      <>
        Plug in your purchase assumptions, then subtract expected credits in the{' '}
        <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
          Buyer Closing Cost Calculator
        </a>
        .
      </>
    ),
  },
  {
    slug: 'title-insurance-and-closing-services-you-can-shop-for',
    title: 'Title Insurance and Closing Services You Can Shop For',
    metadataTitle: 'Title Insurance and Closing Services You Can Shop For',
    description:
      'Learn which title and closing services you may be able to shop for, how title insurance works, and how to reduce surprises at closing.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=z-IBqVGk2Pg',
      embedUrl: 'https://www.youtube.com/embed/z-IBqVGk2Pg',
      channel: 'American Land Title Association',
    },
    readingMinutes: 9,
    wordCount: 1905,
    intro: [
      'Title and closing costs are easy to treat as mysterious settlement charges. But buyers may be able to shop for some services, compare title or settlement quotes, and replace broad calculator assumptions with actual numbers before closing.',
      'The key is knowing what title insurance does, what services appear on the Loan Estimate, and which providers are controlled by the lender, contract, local custom, or buyer choice.',
    ],
    sections: [
      {
        id: 'title-search',
        heading: 'What a Title Search Is',
        paragraphs: [
          'A title search reviews public records and related documents to identify ownership, liens, judgments, easements, unpaid taxes, and other matters that could affect title. The search helps the title company or attorney understand what must be cleared before closing.',
          'A clean-looking property listing is not the same as clear title. The title process exists because ownership history can contain issues that are not obvious during a showing.',
        ],
      },
      {
        id: 'title-insurance',
        heading: 'Lender’s Title Insurance Versus Owner’s Title Insurance',
        paragraphs: [
          'Lender’s title insurance protects the lender’s interest in the property. It is commonly required when the buyer uses a mortgage. It does not necessarily protect the buyer’s ownership interest.',
          'Owner’s title insurance is different. It is designed to protect the owner’s interest if a covered title problem appears later. Whether to buy an owner’s policy is a decision buyers should evaluate based on cost, risk tolerance, local practice, and professional guidance.',
          'Title insurance is generally paid once, not monthly like homeowners insurance. Local rate regulation and filed-rate rules can affect pricing, so do not assume title premiums are freely negotiable everywhere.',
        ],
      },
      {
        id: 'loan-estimate',
        heading: 'Where Shop-able Services Appear',
        paragraphs: [
          'The Loan Estimate separates some services the borrower can shop for from services the borrower cannot shop for. Title services, settlement services, surveys, pest inspections, and similar items may appear in the shoppable section depending on the transaction.',
          <>
            If you are comparing multiple lender packages, use the process in{' '}
            <a href="/blog/how-to-compare-loan-estimates" className="font-medium text-blue-600 underline">
              How to Compare Loan Estimates Like a Pro
            </a>{' '}
            so title quotes do not get mixed up with lender-controlled charges.
          </>,
        ],
      },
      {
        id: 'service-table',
        heading: 'Services Buyers May Be Able to Compare',
        paragraphs: [
          'The table below is educational. It does not mean every buyer can choose every provider in every transaction.',
        ],
        table: {
          headers: ['Service or Fee', 'May Be Shop-able?', 'Where It Appears', 'Who Usually Selects Provider?', 'What to Compare', 'Local-Variation Warning'],
          rows: [
            ['Lender’s title policy', 'Sometimes pricing/provider may be affected by local rules', 'Loan Estimate and Closing Disclosure', 'Often tied to lender/title provider requirements', 'Premium, endorsements, related fees', 'Premium rules vary by state'],
            ['Owner’s title policy', 'Often yes, subject to contract and local practice', 'Loan Estimate and Closing Disclosure', 'Buyer, seller, contract, or local custom', 'Coverage, premium, simultaneous-issue pricing', 'Who pays varies by market'],
            ['Settlement or escrow fee', 'Sometimes', 'Title/settlement sections', 'Title company, escrow company, attorney, or contract', 'Total fee and included services', 'Terminology varies by state'],
            ['Title search or examination', 'Sometimes bundled', 'Title services', 'Title provider or attorney', 'Bundled vs separate charge', 'May be included in premium in some places'],
            ['Recording-related service', 'Limited', 'Government/title-related areas', 'Provider/local recording office', 'Service charge vs government fee', 'Government fees are not provider profit'],
            ['Wire or courier fees', 'Sometimes', 'Title/settlement charges', 'Settlement provider', 'Amount and necessity', 'Can vary by provider and closing method'],
          ],
        },
      },
      {
        id: 'quotes',
        heading: 'Example: Comparing Two Title or Settlement Quotes',
        paragraphs: [
          'When comparing providers, ask for a written quote that separates title premium, endorsements, settlement or escrow fee, search or exam charges, recording-related services, wire fees, and any courier or document charges.',
        ],
        table: {
          headers: ['Charge', 'Provider A', 'Provider B', 'Question to Ask'],
          rows: [
            ['Lender’s title policy', '$1,050', '$1,050', 'Is this state-filed or lender-required?'],
            ['Owner’s title policy', '$1,600', '$1,475', 'Is there simultaneous-issue pricing?'],
            ['Settlement or escrow fee', '$695', '$850', 'What services are included?'],
            ['Title search or examination', '$250', 'Included', 'Is this bundled with another line?'],
            ['Recording-related service', '$95', '$125', 'Is this separate from county recording fees?'],
            ['Wire or courier fees', '$75', '$45', 'Can any delivery fee be avoided?'],
            ['Total quote', '$3,765', '$3,545', 'Are the quotes based on the same loan and price?'],
          ],
        },
      },
      {
        id: 'paperwork',
        heading: 'Why Paperwork May Group Charges Differently',
        paragraphs: [
          'The Loan Estimate, Closing Disclosure, title quote, and final title invoice may group charges differently. A fee included in one provider’s bundle may be a separate line on another provider’s quote.',
          <>
            That is why the final review matters. See{' '}
            <a href="/blog/how-to-review-your-closing-disclosure" className="font-medium text-blue-600 underline">
              How to Review Your Closing Disclosure Before Signing
            </a>{' '}
            before settlement.
          </>,
        ],
      },
      {
        id: 'how-to-shop',
        heading: 'How to Shop Without Delaying Closing',
        paragraphs: [
          'Ask early. Title and settlement providers need time to search records, clear issues, coordinate payoff information, and prepare documents. Waiting until the final week can create more risk than savings.',
          'Compare providers on responsiveness, total cost, wire-security procedures, experience in the county, and ability to meet the closing timeline. Cheapest is not automatically best if the provider cannot close accurately and on time.',
        ],
      },
      {
        id: 'calculator',
        heading: 'Replace Generic Assumptions With Real Quotes',
        paragraphs: [
          <>
            Once you have quotes, update the title and settlement fields in the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>
            . A real quote is more useful than a broad percentage assumption.
          </>,
          'Keep the quote handy when you receive the Closing Disclosure so you can spot unexpected changes.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Title insurance and closing services are not just background paperwork. They can affect your protection, cash to close, and closing timeline.',
          <>
            After you gather title quotes, update your{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            estimate with real numbers.
          </>,
        ],
      },
    ],
    faqs: [
      { question: 'Do I need owner’s title insurance?', answer: 'It is often optional, but lender coverage protects the lender, not necessarily your ownership interest. Evaluate the risk and local practice.' },
      { question: 'Why does the premium look different on my paperwork?', answer: 'Some charges may be bundled, split, discounted, or governed by local title-rate rules.' },
      { question: 'Can my agent choose the title company for me?', answer: 'Agents may recommend providers, but the contract, lender, local practice, and your choices determine what is possible.' },
      { question: 'Is title insurance recurring?', answer: 'Title insurance is generally a one-time premium, not a monthly recurring premium.' },
      { question: 'Can I shop for every title-related service?', answer: 'No. Some services may be lender-required, contract-controlled, or governed by local practice.' },
      { question: 'Why do title practices vary by state?', answer: 'Real estate transfer customs, insurance regulation, attorney involvement, and recording practices vary by location.' },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/how-to-compare-loan-estimates', label: 'How to Compare Loan Estimates Like a Pro' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-lenders-title-insurance-en-163/', label: 'CFPB lender’s title insurance overview' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
      { href: 'https://www.alta.org/homebuyer/', label: 'American Land Title Association homebuyer resources' },
    ],
    cta: (
      <>
        After you gather title quotes, update your{' '}
        <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
          Buyer Closing Cost Calculator
        </a>{' '}
        estimate with real numbers.
      </>
    ),
  },
  {
    slug: 'prepaid-costs-and-escrow-deposits-explained',
    title: 'Prepaid Costs and Escrow Deposits Explained',
    metadataTitle: 'Prepaid Costs and Escrow Deposits Explained',
    description:
      'Understand prepaid interest, insurance, tax reserves, and escrow funding so your cash-to-close estimate is closer to reality.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=1qD-IiSUlAE',
      embedUrl: 'https://www.youtube.com/embed/1qD-IiSUlAE',
      channel: 'myticor',
    },
    readingMinutes: 9,
    wordCount: 1830,
    intro: [
      'A buyer can estimate lender and title fees fairly well and still be surprised by cash to close. The missing piece is often prepaid costs and escrow deposits.',
      'Prepaids are not all lender fees. They are amounts paid upfront for interest, insurance, taxes, and escrow funding. They can change because the closing date changes, insurance premium changes, tax timing changes, or the lender updates the escrow analysis.',
    ],
    sections: [
      {
        id: 'closing-vs-prepaids',
        heading: 'Closing Costs Versus Prepaid Costs',
        paragraphs: [
          'Closing costs are the broader transaction costs of getting the loan and completing the purchase. Prepaids are specific upfront amounts for costs that relate to the first days, months, or escrow setup after closing.',
          'A lender origination charge is not the same as prepaid interest. A title settlement fee is not the same as the first homeowners-insurance premium. Separating these categories makes estimates clearer.',
        ],
      },
      {
        id: 'prepaid-interest',
        heading: 'What Prepaid Interest Is',
        paragraphs: [
          'Prepaid interest covers interest from the closing date through the end of the month, depending on how the loan is set up. Because it depends on the closing date, closing early or late in the month can change this line.',
          'Closing later in the month may reduce prepaid interest because fewer days remain before the next month starts. That does not necessarily mean the loan is cheaper overall; it mainly changes timing.',
        ],
      },
      {
        id: 'insurance',
        heading: 'First-Year Insurance and Initial Reserves',
        paragraphs: [
          'Many buyers pay the first homeowners-insurance premium at or before closing. If the loan includes escrow, the lender may also collect reserves so the escrow account has enough funds for future insurance and tax bills.',
          'This is why the same insurance policy can affect cash to close in two ways: the first-year premium and the initial escrow deposit.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Early-Month Versus Late-Month Closing',
        paragraphs: [
          'Assume the same purchase and loan terms, with prepaid interest estimated at $62 per day. The actual numbers depend on lender calculations, tax timing, insurance timing, and local practices.',
        ],
        table: {
          headers: [
            'Closing Date',
            'Days of Prepaid Interest',
            'Prepaid Interest',
            'First-Year Insurance',
            'Initial Tax Reserve',
            'Initial Insurance Reserve',
            'Estimated Total Prepaids',
          ],
          rows: [
            ['May 5', '26 days', '$1,612', '$1,850', '$2,400', '$925', '$6,787'],
            ['May 25', '6 days', '$372', '$1,850', '$2,400', '$925', '$5,547'],
          ],
        },
      },
      {
        id: 'escrow-account',
        heading: 'What an Escrow Account Does',
        paragraphs: [
          'An escrow account lets the servicer collect monthly amounts for property taxes and insurance and then pay those bills when due. The initial escrow deposit starts that account at closing.',
          'An escrow cushion is an extra amount the servicer may collect within allowed limits to reduce the risk of the account going negative. The cushion and reserve schedule depend on the escrow analysis.',
          <>
            For what can happen later if taxes or insurance rise, read{' '}
            <a href="/blog/why-your-mortgage-payment-went-up" className="font-medium text-blue-600 underline">
              Why Your Mortgage Payment Went Up
            </a>
            .
          </>,
        ],
      },
      {
        id: 'tax-cycles',
        heading: 'Why Tax Billing Cycles Affect Reserves',
        paragraphs: [
          'Property taxes are billed differently by location. Some areas bill annually, others semiannually, and due dates can be far from the closing date. The lender may collect enough to pay the next bill and keep the account above its required minimum.',
          'This is why two buyers with the same purchase price can have different escrow deposits in different counties or even with different closing dates.',
        ],
      },
      {
        id: 'changes',
        heading: 'Why Prepaids May Change Before Closing',
        paragraphs: [
          'Prepaids can change between the Loan Estimate and Closing Disclosure because the closing date, insurance premium, tax estimate, escrow setup, or loan amount changes.',
          <>
            When the final numbers arrive, compare them with{' '}
            <a href="/blog/how-to-review-your-closing-disclosure" className="font-medium text-blue-600 underline">
              How to Review Your Closing Disclosure Before Signing
            </a>
            .
          </>,
        ],
      },
      {
        id: 'calculator',
        heading: 'How to Add Prepaids to Your Estimate',
        paragraphs: [
          <>
            Use the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            to estimate fees first. Then add homeowners insurance, prepaid interest, initial tax
            reserves, and insurance reserves to approximate real cash to close.
          </>,
          'Ask the lender which amounts are one-time prepaids, which are initial escrow deposits, and which will become part of the monthly payment.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Prepaids and escrow deposits are easy to overlook because they are not always lender fees. They are timing and reserve items that help bridge the gap between closing day and future tax and insurance bills.',
          <>
            Use the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            to estimate fees first, then add prepaids and escrow to approximate real cash to close.
          </>,
        ],
      },
    ],
    faqs: [
      { question: 'Are prepaids the same as closing costs?', answer: 'They are part of cash to close but different from lender or title fees. Prepaids fund interest, insurance, taxes, or escrow.' },
      { question: 'Why do I prepay homeowners insurance?', answer: 'Many lenders require proof the first policy period is paid so the property is insured at closing.' },
      { question: 'Why does closing later in the month change prepaid interest?', answer: 'Prepaid interest often covers the days from closing through month-end, so fewer remaining days can reduce that line.' },
      { question: 'Can I avoid an escrow account?', answer: 'Sometimes, depending on loan type, lender rules, equity, and state law. Some loans require escrow.' },
      { question: 'Do escrow deposits reduce my loan balance?', answer: 'No. Escrow deposits fund future tax and insurance bills; they do not pay down principal.' },
      { question: 'Why did the prepaid amount change before closing?', answer: 'The closing date, insurance premium, tax estimate, or escrow analysis may have changed.' },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/why-your-mortgage-payment-went-up', label: 'Why Your Mortgage Payment Went Up' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'CFPB Closing Disclosure explainer' },
      { href: 'https://www.consumerfinance.gov/rules-policy/regulations/1024/17/', label: 'CFPB escrow account regulation' },
      { href: 'https://myhome.freddiemac.com/buying/understanding-costs', label: 'Freddie Mac understanding homebuying costs' },
    ],
    cta: (
      <>
        Use the{' '}
        <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
          Buyer Closing Cost Calculator
        </a>{' '}
        to estimate fees first, then add prepaids and escrow to approximate real cash to close.
      </>
    ),
  },
  {
    slug: 'how-to-review-your-closing-disclosure',
    title: 'How to Review Your Closing Disclosure Before Signing',
    metadataTitle: 'How to Review Your Closing Disclosure Before Signing',
    description:
      'Use the three-day review window wisely. Learn what to check on your Closing Disclosure and how to spot changes before closing day.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=I5J6EcAhwWQ',
      embedUrl: 'https://www.youtube.com/embed/I5J6EcAhwWQ',
      channel: 'Old Republic Title',
    },
    readingMinutes: 11,
    wordCount: 2110,
    intro: [
      'The Closing Disclosure is one of the most important documents a mortgage borrower receives before settlement. It shows the final or near-final loan terms, projected payment, closing costs, credits, deposits, and cash to close.',
      'The review period matters because closing day is the wrong time to discover a missing earnest-money credit, changed rate, unexpected title charge, or higher cash-to-close number. A structured review helps you ask better questions before signing.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'What the Closing Disclosure Is',
        paragraphs: [
          'The Closing Disclosure is a five-page mortgage form that details the loan you selected. It includes loan terms, projected payments, closing-cost details, cash to close, loan disclosures, and contact information.',
          'It is not the same as the Loan Estimate. The Loan Estimate comes earlier and helps compare offers. The Closing Disclosure comes near the end and should be compared against the most recent Loan Estimate and your contract.',
        ],
      },
      {
        id: 'three-days',
        heading: 'Why the Three-Business-Day Review Period Matters',
        paragraphs: [
          'Borrowers generally receive the Closing Disclosure at least three business days before closing. Use that time to review, ask questions, and resolve errors. Do not treat it as a formality.',
          'Not every fee change triggers a new three-day waiting period. Certain material changes can, such as some APR increases, a prepayment penalty being added, or a loan product change. Ask the lender if you are unsure.',
        ],
      },
      {
        id: 'five-numbers',
        heading: 'The Five Numbers to Verify First',
        paragraphs: [
          'Start with the loan amount, interest rate, monthly principal and interest, estimated total payment, and cash to close. These numbers tell you whether the loan still matches what you expected.',
          <>
            If the payment seems off, compare it with the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            and then identify whether the difference is rate, taxes, insurance, mortgage insurance,
            or escrow.
          </>,
        ],
      },
      {
        id: 'checklist',
        heading: 'Closing Disclosure Review Checklist',
        paragraphs: [
          'Use this checklist as a sense-check, not as a substitute for your lender, settlement agent, attorney, or real estate professional.',
        ],
        table: {
          headers: ['Line Item', 'Loan Estimate Amount', 'Closing Disclosure Amount', 'Difference', 'Possible Explanation', 'Question to Ask'],
          rows: [
            ['Loan amount', '$382,500', '$382,500', '$0', 'No change', 'Does this match my final price and down payment?'],
            ['Interest rate', '6.75%', '6.75%', 'None', 'Rate stayed locked', 'Is my rate locked through closing?'],
            ['Origination charges', '$1,100', '$1,100', '$0', 'No change', 'Are all lender fees expected?'],
            ['Lender credits', '$2,500', '$2,500', '$0', 'Credit carried through', 'Is the full credit applied?'],
            ['Title charges', '$3,400', '$3,650', '+$250', 'Provider quote changed or item added', 'What changed from the title quote?'],
            ['Prepaid interest', '$900', '$620', '-$280', 'Closing date moved later', 'How many days are included?'],
            ['Escrow deposit', '$2,800', '$3,200', '+$400', 'Tax or insurance estimate changed', 'Which escrow item changed?'],
            ['Seller credits', '$6,000', '$6,000', '$0', 'Contract credit applied', 'Does this match the contract?'],
            ['Earnest-money credit', '$8,000', '$8,000', '$0', 'Deposit credited', 'Is my full deposit shown?'],
            ['Cash to close', '$48,000', '$48,370', '+$370', 'Net of several changes', 'What line items explain the increase?'],
          ],
        },
      },
      {
        id: 'fees',
        heading: 'How to Compare Fees, Title Charges, and Prepaids',
        paragraphs: [
          'Compare lender fees with the Loan Estimate first. Then compare title and settlement charges with your title quote or settlement-provider estimate.',
          <>
            For title-specific review, use{' '}
            <a href="/blog/title-insurance-and-closing-services-you-can-shop-for" className="font-medium text-blue-600 underline">
              Title Insurance and Closing Services You Can Shop For
            </a>
            . For prepaids, use{' '}
            <a href="/blog/prepaid-costs-and-escrow-deposits-explained" className="font-medium text-blue-600 underline">
              Prepaid Costs and Escrow Deposits Explained
            </a>
            .
          </>,
        ],
      },
      {
        id: 'credits-deposits',
        heading: 'Review Seller Credits, Lender Credits, and Earnest Money',
        paragraphs: [
          'Seller credits should match the contract. Lender credits should match the locked loan pricing or latest lender agreement. Earnest money should appear as money already paid by or on behalf of the borrower.',
          <>
            If credits are central to the deal, compare the numbers with{' '}
            <a href="/blog/seller-credits-and-lender-credits-lower-cash-to-close" className="font-medium text-blue-600 underline">
              How Seller Credits and Lender Credits Lower Cash to Close
            </a>
            .
          </>,
        ],
      },
      {
        id: 'changes',
        heading: 'Which Changes Deserve Immediate Questions',
        paragraphs: [
          'Ask immediately about a changed loan amount, changed rate, missing credit, missing deposit, higher cash to close, added points, unexpected prepayment penalty, or loan product that no longer matches your understanding.',
          'Some changes are reasonable. A closing-date shift can change prepaid interest. A final insurance premium can change escrow. A title quote may become more precise. The issue is whether the change is explained, documented, and acceptable before signing.',
        ],
      },
      {
        id: 'who-to-contact',
        heading: 'Who to Contact When Something Looks Wrong',
        paragraphs: [
          'Start with the lender or loan officer for loan terms, rate, APR, lender fees, and lender credits. Contact the settlement agent, escrow officer, closing attorney, or title company for title charges, recording, prorations, wiring instructions, and deposit credits.',
          'If contract credits or repair credits are missing, involve your real estate agent or attorney. Keep written records of answers and revised documents.',
        ],
      },
      {
        id: 'calculator',
        heading: 'Use the Calculator as a Sense-Check',
        paragraphs: [
          <>
            The{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            is useful for a planning comparison. It is not a substitute for the final Closing
            Disclosure.
          </>,
          'If the final numbers feel off, compare them with your calculator estimate and identify the difference by category before you sign.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'The Closing Disclosure deserves a calm, line-by-line review. Verify the loan, payment, cash to close, credits, deposit, title charges, prepaids, and escrow funding before closing day.',
          <>
            If the final numbers feel off, compare them with your{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            estimate before you sign.
          </>,
        ],
      },
    ],
    faqs: [
      { question: 'What triggers a new three-day waiting period?', answer: 'Certain material changes can trigger a new waiting period, but not every fee change does. Ask the lender how the rule applies to your situation.' },
      { question: 'Can closing costs change after the Loan Estimate?', answer: 'Yes. Some costs can change as services, dates, credits, tax estimates, and insurance figures become final.' },
      { question: 'What should I do if cash to close is higher than expected?', answer: 'Ask for a line-by-line explanation and compare the Closing Disclosure with your Loan Estimate, contract, title quote, and deposit records.' },
      { question: 'Should sellers receive a Closing Disclosure?', answer: 'Sellers may receive seller-side settlement disclosures. The buyer’s mortgage Closing Disclosure is focused on the borrower’s loan.' },
      { question: 'Can I delay closing if the numbers are wrong?', answer: 'Potentially. Discuss urgent issues with your lender, settlement agent, agent, or attorney before signing.' },
      { question: 'What documents should I compare with the Closing Disclosure?', answer: 'Compare the Loan Estimate, purchase contract, amendments, title quote, insurance premium, tax information, and earnest-money receipt.' },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/how-to-compare-loan-estimates', label: 'How to Compare Loan Estimates Like a Pro' },
      { href: '/blog/seller-credits-and-lender-credits-lower-cash-to-close', label: 'How Seller Credits and Lender Credits Lower Cash to Close' },
      { href: '/blog/prepaid-costs-and-escrow-deposits-explained', label: 'Prepaid Costs and Escrow Deposits Explained' },
      { href: '/blog/title-insurance-and-closing-services-you-can-shop-for', label: 'Title Insurance and Closing Services You Can Shop For' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'CFPB Closing Disclosure explainer' },
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/', label: 'CFPB What is a Closing Disclosure?' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
    ],
    cta: (
      <>
        If the final numbers feel off, compare them with your{' '}
        <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
          Buyer Closing Cost Calculator
        </a>{' '}
        estimate before you sign.
      </>
    ),
  },
];

export const buyerDecisionArticleMap = Object.fromEntries(
  buyerDecisionArticles.map((article) => [article.slug, article])
) as Record<string, BuyerDecisionArticle>;

export function getBuyerDecisionArticle(slug: string) {
  const article = buyerDecisionArticleMap[slug];

  if (!article) {
    throw new Error(`Missing buyer decision article for slug: ${slug}`);
  }

  return article;
}

export function getBuyerDecisionMetadata(slug: string): Metadata {
  const article = getBuyerDecisionArticle(slug);
  const canonical = `/blog/${article.slug}`;

  return {
    title: article.metadataTitle,
    description: article.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: article.metadataTitle,
      description: article.description,
      url: `${siteUrl}${canonical}`,
      type: 'article',
      siteName: 'PropCalcHub',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metadataTitle,
      description: article.description,
    },
  };
}

function ArticleTable({ table }: { table: Table }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-slate-700">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
          {table.rows.map((row) => (
            <tr key={row.join('|')}>
              {row.map((cell, index) => (
                <td key={`${cell}-${index}`} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function JsonLd({ article }: { article: BuyerDecisionArticle }) {
  const canonical = `${siteUrl}/blog/${article.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        author: {
          '@type': 'Organization',
          name: authorName,
        },
        publisher: {
          '@type': 'Organization',
          name: 'PropCalcHub',
          url: siteUrl,
        },
        mainEntityOfPage: canonical,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function MediaSection({ article }: { article: BuyerDecisionArticle }) {
  if (article.media.type === 'resource') {
    return (
      <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">{article.media.heading}</h2>
        <p className="mt-4 leading-7 text-slate-600">{article.media.text}</p>
        <a
          href={article.media.url}
          className="mt-5 block rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-slate-100"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Official resource from {article.media.source}
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{article.media.linkLabel}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{article.media.url}</p>
        </a>
      </section>
    );
  }

  return null;
}

export function BuyerDecisionArticlePage({ slug }: { slug: string }) {
  const article = getBuyerDecisionArticle(slug);
  const tocSections = article.sections.filter((section) => section.id !== 'final-thoughts');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd article={article} />
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            Buyer Closing Costs
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>By {authorName}</span>
            <span aria-hidden="true">|</span>
            <span>{article.readingMinutes} min read</span>
          </div>
          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
            {article.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </header>

        <MediaSection article={article} />

        <nav className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200" aria-label="Table of contents">
          <h2 className="text-2xl font-semibold">Table of Contents</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-6 sm:grid-cols-2">
            {tocSections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="font-medium text-blue-600 underline">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-6 space-y-6">
          {article.sections.map((section, index) => (
            <div key={section.id}>
              <section id={section.id} className="scroll-mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                  {section.table ? <ArticleTable table={section.table} /> : null}
                </div>
              </section>
              {index === 0 ? <AdSlot slot="2187236714" className="my-10" /> : null}
              {index === Math.max(3, article.sections.length - 3) ? (
                <AdSlot slot="2817792104" className="my-10" />
              ) : null}
            </div>
          ))}

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-5 space-y-5">
              {article.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Related Tools and Articles</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {article.relatedLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-medium text-blue-600 underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Official Sources</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-600">
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} className="font-medium text-blue-600 underline" rel="noopener noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-500">{disclaimer}</p>
            <p className="mt-5 leading-7 text-slate-600">{article.cta}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

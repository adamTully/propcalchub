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

type ArticleMedia = {
  type: 'video';
  url: string;
  embedUrl: string;
  channel: string;
};

export type SellerDecisionArticle = {
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

export const sellerDecisionArticles: SellerDecisionArticle[] = [
  {
    slug: 'mortgage-payoff-amount-vs-current-balance',
    title: 'Mortgage Payoff Amount vs Current Balance When You Sell',
    metadataTitle: 'Mortgage Payoff Amount vs Current Balance When You Sell',
    description:
      'Your payoff amount is often higher than your mortgage balance. Learn why that matters and how it changes your estimated seller proceeds.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=joUlj6xZ7n4',
      embedUrl: 'https://www.youtube.com/embed/joUlj6xZ7n4',
      channel: 'Justin McCarthy',
    },
    readingMinutes: 9,
    wordCount: 1810,
    intro: [
      'When you sell a home with a mortgage, the number in your online loan account is usually not the exact amount that will be paid at closing. Your current balance is a snapshot. Your payoff amount is the lender-approved amount needed to fully satisfy the loan on a specific date.',
      <>
        That difference matters because seller proceeds are calculated after the mortgage payoff,
        closing costs, credits, prorations, and other charges. Before relying on a rough net sheet,
        update your estimate in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        with the actual payoff statement when it is available.
      </>,
    ],
    sections: [
      {
        id: 'balance-vs-payoff',
        heading: 'Current Balance vs Payoff Amount',
        paragraphs: [
          'Your current mortgage balance is the unpaid principal shown by your servicer at a point in time. It is useful, but it is not a closing instruction. It usually excludes interest that has accrued since the last payment, and it may not include administrative charges that appear only on a formal payoff statement.',
          'A payoff amount is different. It is the amount required to pay the loan in full through a stated good-through date. The title company, closing attorney, or escrow company typically uses this number to wire funds and release the lien.',
          'For sellers, the payoff amount is the number that reduces walk-away cash. If you enter only the online balance into a net proceeds estimate, your estimate may be optimistic.',
        ],
      },
      {
        id: 'why-higher',
        heading: 'Why the Payoff Is Often Higher',
        paragraphs: [
          'Mortgage interest accrues daily. Even if your regular monthly payment is current, interest keeps building until the loan is paid off. A payoff statement rolls that per-diem interest into the amount due through a particular date.',
          'The payoff may also include a payoff statement fee, wire fee, recording-related charge, late charges if applicable, or other servicer-approved items. Some loans may have a prepayment penalty, though many residential mortgages do not. Do not assume either way; check your note, payoff statement, and loan servicer.',
          'Escrow is a separate issue. If your lender is holding money for property taxes or insurance, that escrow balance is typically refunded after payoff or handled separately by the servicer. It usually should not be treated as an immediate credit unless your closing documents say so.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Online Balance vs Payoff Statement',
        paragraphs: [
          'Suppose a seller sees a $286,400 balance online. Closing is scheduled for the 18th of the month, and the lender issues a payoff statement good through that date. The payoff statement includes accrued interest and small administrative items.',
          'In this example, the payoff number is $1,015 higher than the online balance. That difference directly reduces estimated proceeds unless another credit offsets it.',
        ],
        table: {
          headers: ['Line Item', 'Online Account Figure', 'Payoff Statement Figure', 'Difference', 'Why It Matters'],
          rows: [
            ['Unpaid principal balance', '$286,400', '$286,400', '$0', 'Starting point for the payoff'],
            ['Accrued interest through good-through date', 'Not shown', '$890', '$890', 'Interest continues until payoff funds arrive'],
            ['Payoff or statement fee', 'Not shown', '$35', '$35', 'Servicer administrative cost'],
            ['Recording or lien-release fee', 'Not shown', '$90', '$90', 'May be collected to release the mortgage lien'],
            ['Estimated total payoff', '$286,400', '$287,415', '$1,015', 'Use the payoff statement for seller proceeds planning'],
          ],
        },
      },
      {
        id: 'good-through-date',
        heading: 'Why the Good-Through Date Matters',
        paragraphs: [
          'A payoff statement is date-sensitive. The good-through date tells the closing team how long the quoted amount remains valid. If closing moves later, the lender may need to add more per-diem interest. If closing moves earlier, the payoff may be slightly lower or the lender may refund any overage later.',
          'This is why a stale payoff statement can create closing friction. The settlement agent may need a refreshed payoff before funds can be disbursed. Sellers should avoid treating an old payoff quote as final unless the closing date still fits the quote.',
        ],
      },
      {
        id: 'requesting-payoff',
        heading: 'How the Payoff Request Usually Works',
        paragraphs: [
          'The title company, escrow company, or closing attorney often requests the payoff directly from the lender after receiving seller authorization. Some servicers allow sellers to request one online, but the closing team usually needs an official version with wiring instructions and a clear payoff date.',
          'If you have more than one lien, home equity loan, HELOC, or assistance loan, each one may need its own payoff or release process. Bring those debts into the conversation early so your first seller net sheet is not missing a major deduction.',
        ],
      },
      {
        id: 'calculator',
        heading: 'How to Use the Payoff in a Seller Net Sheet',
        paragraphs: [
          <>
            Early in the listing process, use the latest online balance as a placeholder in the{' '}
            <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
              Seller Net Proceeds Calculator
            </a>
            . Once the payoff statement arrives, replace the placeholder with the exact payoff
            amount.
          </>,
          <>
            If you are modeling whether extra principal payments could change your future payoff,
            compare scenarios in the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            and read{' '}
            <a href="/blog/extra-mortgage-payments-early-principal-paydown" className="font-medium text-blue-600 underline">
              Extra Mortgage Payments and Early Principal Paydown
            </a>
            .
          </>,
        ],
      },
      {
        id: 'closing-review',
        heading: 'Where to Check the Number Before Signing',
        paragraphs: [
          <>
            The payoff should appear on your seller settlement statement or closing disclosure
            materials. Compare that number with the latest payoff statement, then ask about any
            unexpected fee, added interest, or lien-release charge before signing. For a buyer-side
            document walkthrough that also helps sellers understand settlement line items, see{' '}
            <a href="/blog/how-to-review-your-closing-disclosure" className="font-medium text-blue-600 underline">
              How to Review Your Closing Disclosure Before Signing
            </a>
            .
          </>,
          <>
            If the payoff is not the only surprise, review common title problems in{' '}
            <a href="/blog/liens-title-issues-and-other-surprises-that-shrink-seller-proceeds" className="font-medium text-blue-600 underline">
              Liens, Title Issues, and Other Surprises That Shrink Seller Proceeds
            </a>
            .
          </>,
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Your mortgage balance is a helpful estimate, but your payoff statement is the closing number. The gap is usually about timing, accrued interest, fees, and the need to release the lender lien cleanly.',
          'For the most realistic proceeds estimate, keep using placeholders early, then update the payoff, credits, prorations, and title charges as each number becomes official.',
        ],
      },
    ],
    faqs: [
      { question: 'Is my mortgage payoff the same as my current balance?', answer: 'No. The current balance is usually unpaid principal. The payoff amount is the amount needed to satisfy the loan through a specific date.' },
      { question: 'Why did my payoff include interest after my last payment?', answer: 'Mortgage interest generally accrues daily until the lender receives payoff funds, so the quote includes per-diem interest through the good-through date.' },
      { question: 'What happens if closing is delayed?', answer: 'The payoff may need to be updated because additional daily interest can accrue after the original good-through date.' },
      { question: 'Will I get my escrow balance back?', answer: 'Many servicers refund remaining escrow after payoff, but the timing and handling depend on the servicer and the final account reconciliation.' },
      { question: 'Can I use my online mortgage balance in a seller calculator?', answer: 'Yes for an early estimate, but replace it with the official payoff amount before relying on the final proceeds number.' },
      { question: 'Can a payoff include a prepayment penalty?', answer: 'Some loans can include one, but do not assume it applies. Review your loan documents and the payoff statement.' },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/extra-mortgage-payments-early-principal-paydown', label: 'Extra Mortgage Payments and Early Principal Paydown' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
      { href: '/blog/liens-title-issues-and-other-surprises-that-shrink-seller-proceeds', label: 'Liens and Title Issues That Shrink Seller Proceeds' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-payoff-amount-en-135/', label: 'Consumer Financial Protection Bureau payoff amount explainer' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'Consumer Financial Protection Bureau Closing Disclosure explainer' },
      { href: 'https://www.youtube.com/watch?v=joUlj6xZ7n4', label: 'Justin McCarthy video on YouTube' },
    ],
    cta: (
      <>
        Estimate your mortgage payoff and other sale deductions in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>
        .
      </>
    ),
  },
  {
    slug: 'how-seller-concessions-and-repair-credits-reduce-net-proceeds',
    title: 'How Seller Concessions and Repair Credits Reduce Net Proceeds',
    metadataTitle: 'How Seller Concessions and Repair Credits Reduce Net Proceeds',
    description:
      'See how seller credits, repair concessions, and buydowns affect your walk-away cash before you accept an offer.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=qiG4BXXy3nQ',
      embedUrl: 'https://www.youtube.com/embed/qiG4BXXy3nQ',
      channel: 'WHO 13 News',
    },
    readingMinutes: 10,
    wordCount: 1905,
    intro: [
      'A strong offer is not just the highest price. Seller concessions, repair credits, rate buydown contributions, and other negotiated credits can reduce the cash you actually take home at closing.',
      <>
        Before accepting or countering, model the offer in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>
        . A slightly lower price with fewer credits may leave you with more net proceeds than a
        higher headline price with a large giveback.
      </>,
    ],
    sections: [
      {
        id: 'what-counts',
        heading: 'What Counts as a Seller Concession',
        paragraphs: [
          'A seller concession is a value the seller gives the buyer in addition to transferring the property. It may be labeled as a closing-cost credit, repair credit, seller contribution, buyer-agent compensation where applicable, or a contribution toward a temporary or permanent rate buydown.',
          'The language matters because loan programs, appraisals, purchase contracts, and settlement documents may treat credits differently. Still, for seller proceeds planning, many concessions act like a dollar-for-dollar reduction to the amount the seller keeps.',
        ],
      },
      {
        id: 'credits-vs-price',
        heading: 'Seller Credit vs Price Reduction',
        paragraphs: [
          'A price reduction lowers the contract price. A seller credit usually keeps the contract price in place while giving the buyer money toward eligible costs. The seller may see both options as a concession, but they can affect the buyer and seller differently.',
          'Buyers often prefer credits when they are short on cash to close. A credit can help cover allowable closing costs, prepaid items, or a rate buydown. Sellers may prefer a price reduction when the credit would be limited by loan rules or when a lower price creates cleaner appraisal math.',
          <>
            For buyer-side cash planning, compare the related guide{' '}
            <a href="/blog/seller-credits-and-lender-credits-lower-cash-to-close" className="font-medium text-blue-600 underline">
              How Seller Credits and Lender Credits Lower Cash to Close
            </a>
            .
          </>,
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Comparing Offer Scenarios',
        paragraphs: [
          'Assume a seller is considering three versions of the same offer. The contract price changes, but so do the seller credits and repair concessions. Other seller costs include commission, title, transfer, payoff, and prorations in this simplified estimate.',
          'The highest price does not automatically win if the credits are large enough to erase the difference.',
        ],
        table: {
          headers: ['Scenario', 'Contract Price', 'Seller Credit', 'Repair Credit', 'Buydown Contribution', 'Other Seller Costs', 'Estimated Net Proceeds'],
          rows: [
            ['Offer A: clean price', '$520,000', '$0', '$0', '$0', '$48,000', '$472,000'],
            ['Offer B: higher price with credits', '$530,000', '$8,000', '$4,000', '$6,000', '$48,800', '$463,200'],
            ['Offer C: modest credit', '$525,000', '$3,000', '$0', '$2,500', '$48,400', '$471,100'],
          ],
        },
      },
      {
        id: 'repair-credits',
        heading: 'How Repair Credits Affect Net Proceeds',
        paragraphs: [
          'Repair credits often appear after inspection. Instead of completing repairs before closing, the seller may agree to credit the buyer a negotiated amount. That can preserve the transaction and avoid scheduling delays, but it reduces seller proceeds.',
          'Lenders may limit how repair credits are described or applied. Some repairs may need to be completed before closing if they affect safety, habitability, financing, insurance, or appraisal conditions. The settlement team should confirm what is allowed before the seller counts on a simple credit.',
        ],
      },
      {
        id: 'buydowns',
        heading: 'Rate Buydowns and Seller Contributions',
        paragraphs: [
          'A seller contribution toward a buyer rate buydown can make the buyer payment more workable. A temporary buydown may subsidize payments for the first year or two, while a permanent buydown may involve discount points that lower the note rate.',
          <>
            From the seller perspective, the key question is simple: how much money is being paid
            from seller proceeds at closing? For the mortgage-rate tradeoff side, see{' '}
            <a href="/blog/mortgage-points-vs-lender-credits" className="font-medium text-blue-600 underline">
              Mortgage Points vs Lender Credits
            </a>
            .
          </>,
        ],
      },
      {
        id: 'limits',
        heading: 'Program Limits, Appraisal Issues, and Unused Credits',
        paragraphs: [
          'Seller concessions can be limited by the buyer loan program, occupancy type, down payment, and other rules. A large credit may not be usable if it exceeds allowable costs or program caps. Appraisal concerns can also appear if the contract price is inflated to fund a credit.',
          'Unused credits generally are not a cash bonus to the buyer. They may need to be reduced, reallocated to eligible costs, or handled another way before closing. This is one reason sellers should not accept a concession-heavy offer without confirming the buyer can actually close on those terms.',
        ],
      },
      {
        id: 'review-documents',
        heading: 'Where Credits Show Up at Closing',
        paragraphs: [
          <>
            Credits and concessions should be visible in the contract addenda and settlement
            documents. Before signing, compare the agreed credits with the final statement. The
            article{' '}
            <a href="/blog/how-to-review-your-closing-disclosure" className="font-medium text-blue-600 underline">
              How to Review Your Closing Disclosure Before Signing
            </a>{' '}
            explains how settlement documents organize many closing line items.
          </>,
          'If a credit appears twice, is missing, or is labeled differently than expected, pause and ask the closing team to reconcile the numbers.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Seller concessions can be a smart negotiating tool, especially when they keep a qualified buyer in the deal. They can also quietly turn a great headline price into a weaker net offer.',
          'Compare the full offer, not just the purchase price: credits, repairs, buydowns, commission structure, payoff, taxes, HOA items, and timing all affect what you keep.',
        ],
      },
    ],
    faqs: [
      { question: 'Do seller concessions reduce my net proceeds?', answer: 'Usually yes. Many seller-paid credits reduce the amount available to the seller at closing dollar for dollar.' },
      { question: 'Is a seller credit better than lowering the price?', answer: 'It depends. A credit can help buyer cash to close, while a price reduction may be cleaner for appraisal and financing. Compare both net outcomes.' },
      { question: 'Can a seller pay for a buyer rate buydown?', answer: 'Often yes when allowed by the loan program and contract, but it should be modeled as a seller cost.' },
      { question: 'Can the buyer keep unused seller credits?', answer: 'Generally unused credits are not simply paid to the buyer as cash. They must fit eligible costs and closing rules.' },
      { question: 'Should repair credits be made before or after inspection?', answer: 'They are commonly negotiated after inspection, but the contract, lender, and property condition can affect what is allowed.' },
      { question: 'How should I compare two offers with different credits?', answer: 'Estimate net proceeds for each offer after concessions, repair credits, commissions, payoff, prorations, and closing costs.' },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/seller-credits-and-lender-credits-lower-cash-to-close', label: 'How Seller Credits and Lender Credits Lower Cash to Close' },
      { href: '/blog/mortgage-points-vs-lender-credits', label: 'Mortgage Points vs Lender Credits' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'Consumer Financial Protection Bureau Loan Estimate explainer' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'Consumer Financial Protection Bureau Closing Disclosure explainer' },
      { href: 'https://www.youtube.com/watch?v=qiG4BXXy3nQ', label: 'WHO 13 News video on YouTube' },
    ],
    cta: (
      <>
        Compare offer scenarios in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        before agreeing to seller credits or repair concessions.
      </>
    ),
  },
  {
    slug: 'property-tax-and-hoa-prorations-at-closing',
    title: 'Property Tax and HOA Prorations at Closing',
    metadataTitle: 'Property Tax and HOA Prorations at Closing',
    description:
      'Learn how property tax and HOA prorations affect seller closing figures, and why local billing cycles can change your walk-away cash.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=Csm_tMzc1JA',
      embedUrl: 'https://www.youtube.com/embed/Csm_tMzc1JA',
      channel: 'Allegiance Title Company',
    },
    readingMinutes: 9,
    wordCount: 1825,
    intro: [
      'Property tax and HOA prorations are closing adjustments that split ownership-period costs between buyer and seller. They can be credits or debits, and the direction depends on local billing cycles, contract language, and the closing date.',
      <>
        Because these amounts can move seller cash by hundreds or thousands of dollars, include a
        proration cushion in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        until your closing agent confirms the final numbers.
      </>,
    ],
    sections: [
      {
        id: 'what-proration-means',
        heading: 'What a Closing Proration Means',
        paragraphs: [
          'A proration divides a cost between the party who owned the property before closing and the party who owns it after closing. If the seller owes the buyer for a period the seller occupied but has not yet paid, the seller may receive a debit. If the seller has already paid for time the buyer will own the property, the seller may receive a credit.',
          'The closing day itself can be assigned to the buyer or seller depending on local custom and contract language. One day may sound minor, but on high-tax properties it can still affect the final settlement statement.',
        ],
      },
      {
        id: 'tax-timing',
        heading: 'Taxes Billed in Arrears vs in Advance',
        paragraphs: [
          'In some areas, property taxes are billed in arrears, meaning the bill covers a period that has already passed. In that case, the seller may owe the buyer a credit at closing because the buyer will later receive a tax bill that includes days when the seller owned the home.',
          'In other areas, taxes may be paid in advance or partly in advance. If the seller already paid taxes covering days after closing, the buyer may owe the seller a credit. Never assume the rule from another state, county, or even a nearby municipality applies to your transaction.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: September 10 Closing',
        paragraphs: [
          'Assume a seller closes on September 10. Annual taxes are $7,300, which is about $20 per day in a 365-day year. Monthly HOA dues are $360, or about $12 per day in a 30-day month. The table shows how the same timing can produce different seller debits or credits depending on local rules.',
          'This is illustrative only. Your closing agent will use the tax period, billing status, contract terms, and local practice that apply to the property.',
        ],
        table: {
          headers: ['Item', 'Annual or Monthly Amount', 'Proration Method', 'Seller Debit', 'Seller Credit', 'Local-Rule Warning'],
          rows: [
            ['Property taxes billed in arrears', '$7,300 annually', 'Seller owns Jan 1-Sept 9; buyer pays later bill', '$5,040', '$0', 'Day count and closing-day ownership vary locally'],
            ['Property taxes paid in advance', '$7,300 annually', 'Seller already paid full year; buyer reimburses Sept 10-Dec 31', '$0', '$2,260', 'Depends on actual payment status'],
            ['HOA dues paid monthly', '$360 monthly', 'Seller paid September; buyer reimburses Sept 10-Sept 30', '$0', '$252', 'Association and contract rules can differ'],
            ['HOA transfer or resale package', 'Varies', 'Usually charged separately from dues proration', '$250', '$0', 'Fee responsibility depends on contract and association documents'],
          ],
        },
      },
      {
        id: 'hoa-items',
        heading: 'HOA, Condo, and Special Assessment Items',
        paragraphs: [
          'HOA and condo communities can add more than a simple dues split. There may be resale package fees, transfer fees, move-in fees, capital contribution charges, status letter charges, or special assessment issues.',
          'Special assessments need careful review. Some contracts assign unpaid assessments to the seller, some assign future installments to the buyer, and some split responsibility by due date. The association documents and purchase agreement matter.',
        ],
      },
      {
        id: 'settlement-statement',
        heading: 'Where Prorations Show Up',
        paragraphs: [
          <>
            Seller prorations typically appear on the settlement statement, often an ALTA-style
            statement or similar closing statement. Buyer prepaids and escrow deposits are related
            but not identical; for that side of the transaction, see{' '}
            <a href="/blog/prepaid-costs-and-escrow-deposits-explained" className="font-medium text-blue-600 underline">
              Prepaid Costs and Escrow Deposits Explained
            </a>
            .
          </>,
          <>
            If you want a broader document review habit, pair this with{' '}
            <a href="/blog/how-to-review-your-closing-disclosure" className="font-medium text-blue-600 underline">
              How to Review Your Closing Disclosure Before Signing
            </a>
            .
          </>,
        ],
      },
      {
        id: 'calculator-planning',
        heading: 'How to Estimate Before Final Numbers Arrive',
        paragraphs: [
          'Before the title company or closing attorney produces final figures, use your latest annual tax amount, HOA dues, likely closing date, and local guidance from your agent or escrow team. Then build a cushion for county updates, assessment changes, or HOA fees that are not yet confirmed.',
          <>
            If your mortgage payoff is still a placeholder, update that number separately. The guide{' '}
            <a href="/blog/mortgage-payoff-amount-vs-current-balance" className="font-medium text-blue-600 underline">
              Mortgage Payoff Amount vs Current Balance When You Sell
            </a>{' '}
            explains why payoff timing can change proceeds too.
          </>,
        ],
      },
      {
        id: 'questions-to-ask',
        heading: 'Questions to Ask Your Closing Team',
        paragraphs: [
          'Ask whether taxes are being prorated based on the latest known bill, an estimated bill, the assessed value, or a local formula. Ask who is charged for the closing day. Ask whether HOA fees are current, whether the resale package is ordered, and whether any special assessment is pending.',
          'These questions are not about second-guessing the closing team. They help you understand why the estimate moved and whether any missing association or tax item could reduce your walk-away cash.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Tax and HOA prorations are local, date-sensitive, and contract-sensitive. They may help or hurt seller proceeds depending on whether expenses are paid in arrears or in advance.',
          'Use estimates early, then replace them with final closing-agent figures as soon as they arrive.',
        ],
      },
    ],
    faqs: [
      { question: 'Are property taxes always prorated the same way?', answer: 'No. Tax billing cycles, local customs, and contract language vary widely.' },
      { question: 'Can a seller receive a tax credit at closing?', answer: 'Yes, if the seller has already paid taxes that cover the buyer ownership period, the buyer may reimburse the seller.' },
      { question: 'Can a seller owe a tax debit at closing?', answer: 'Yes, especially where taxes are billed in arrears and the buyer will later pay a bill covering seller-owned days.' },
      { question: 'Are HOA transfer fees the same as HOA prorations?', answer: 'No. Dues prorations split ownership-period dues. Transfer, resale, or status-letter fees are separate charges.' },
      { question: 'Who decides who owns the closing day?', answer: 'The purchase contract, local custom, and closing agent practices usually control the day-count method.' },
      { question: 'Should I include prorations in my net proceeds estimate?', answer: 'Yes. Even rough prorations can materially change seller walk-away cash.' },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/blog/prepaid-costs-and-escrow-deposits-explained', label: 'Prepaid Costs and Escrow Deposits Explained' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
      { href: '/blog/mortgage-payoff-amount-vs-current-balance', label: 'Mortgage Payoff Amount vs Current Balance' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'Consumer Financial Protection Bureau Closing Disclosure explainer' },
      { href: 'https://www.youtube.com/watch?v=Csm_tMzc1JA', label: 'Allegiance Title Company video on YouTube' },
    ],
    cta: (
      <>
        Add estimated tax and HOA adjustments to the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        so your net sheet has room for local prorations.
      </>
    ),
  },
  {
    slug: 'capital-gains-tax-on-a-primary-home-sale',
    title: 'Capital Gains Tax on a Primary Home Sale',
    metadataTitle: 'Capital Gains Tax on a Primary Home Sale',
    description:
      'Learn how the home-sale exclusion works, what counts toward adjusted basis, and how taxes can change your true seller proceeds.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=hK7Vi4X2_eg',
      embedUrl: 'https://www.youtube.com/embed/hK7Vi4X2_eg',
      channel: 'My CPA Coach',
    },
    readingMinutes: 11,
    wordCount: 2205,
    intro: [
      'The cash you receive at closing is not the same thing as your taxable gain. Seller proceeds are a settlement calculation. Capital gain is a tax calculation based on selling price, selling expenses, original basis, adjustments, exclusions, and your personal facts.',
      <>
        Use the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        to estimate pre-tax walk-away cash, then review the tax side separately with current IRS
        guidance and a qualified tax professional.
      </>,
    ],
    sections: [
      {
        id: 'cash-vs-tax',
        heading: 'Seller Proceeds Are Not Taxable Gain',
        paragraphs: [
          'At closing, your net proceeds are reduced by items such as mortgage payoff, commissions, seller credits, prorations, title charges, and recording fees. That number answers: how much cash may be left after settlement?',
          'Taxable gain asks a different question: how much gain did you realize after comparing the sale amount with your adjusted basis and allowable selling expenses? A seller can have large cash proceeds with little taxable gain, or modest cash proceeds with tax complexity if basis is low.',
        ],
      },
      {
        id: 'home-sale-exclusion',
        heading: 'The Primary Residence Exclusion',
        paragraphs: [
          'Current IRS guidance generally allows qualifying single filers to exclude up to $250,000 of gain from the sale of a main home, and qualifying married couples filing jointly to exclude up to $500,000. The common test is whether you owned and used the home as your main home for at least two of the five years before the sale.',
          'There are look-back rules, special situations, and exceptions. Some sellers may qualify for a partial exclusion after certain life events or job, health, or unforeseen circumstance changes. Do not rely on a simplified summary when the tax result is important.',
          <>
            Review the current IRS materials directly: the{' '}
            <a href="https://www.irs.gov/publications/p523" className="font-medium text-blue-600 underline" rel="noopener noreferrer" target="_blank">
              IRS Publication 523 home sale guide
            </a>{' '}
            and{' '}
            <a href="https://www.irs.gov/taxtopics/tc701" className="font-medium text-blue-600 underline" rel="noopener noreferrer" target="_blank">
              IRS Topic 701
            </a>
            .
          </>,
        ],
      },
      {
        id: 'basis',
        heading: 'Adjusted Basis: The Number Sellers Often Forget',
        paragraphs: [
          'Your starting basis is often what you paid for the home plus certain acquisition costs. Adjusted basis then changes over time. Capital improvements may increase basis. Certain casualty losses, insurance reimbursements, depreciation, or business-use adjustments may reduce or otherwise change it.',
          'Repairs and improvements are not always treated the same. Painting a room before listing may be a selling preparation or repair. Adding a room, replacing a roof, or making a major system upgrade may be a capital improvement. Documentation matters because small memory-based estimates are easy to lose when a tax return is prepared years later.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Cash Proceeds vs Potential Tax Gain',
        paragraphs: [
          'This simplified example shows why closing cash and taxable gain should be modeled separately. It does not calculate every possible tax rule, state tax issue, depreciation adjustment, or exclusion limit.',
          'Assume a married couple sells a primary home for $820,000. They owe $310,000 on the mortgage and pay $55,000 in selling costs. Their original purchase price was $410,000, and documented improvements add $85,000 to basis.',
        ],
        table: {
          headers: ['Calculation Item', 'Example Amount', 'Affects Cash Proceeds?', 'Potentially Affects Taxable Gain?', 'Verification Needed'],
          rows: [
            ['Contract sale price', '$820,000', 'Yes', 'Yes', 'Confirm final settlement price'],
            ['Mortgage payoff', '-$310,000', 'Yes', 'No', 'Use official payoff statement'],
            ['Selling expenses', '-$55,000', 'Yes', 'Yes', 'Confirm which expenses are tax-relevant'],
            ['Estimated pre-tax cash proceeds', '$455,000', 'Yes', 'No', 'Settlement estimate only'],
            ['Original cost basis', '$410,000', 'No', 'Yes', 'Find purchase records'],
            ['Capital improvements', '+$85,000', 'No', 'Yes', 'Keep invoices and permits'],
            ['Adjusted basis before other adjustments', '$495,000', 'No', 'Yes', 'Review depreciation or other adjustments'],
            ['Illustrative gain before exclusion', '$270,000', 'No', 'Yes', 'Sale price minus selling expenses and adjusted basis'],
            ['Potential federal home-sale exclusion', 'Up to $500,000', 'No', 'Yes', 'Must qualify under current IRS rules'],
          ],
        },
      },
      {
        id: 'rental-business-use',
        heading: 'Rental, Business Use, and Depreciation Can Complicate the Sale',
        paragraphs: [
          'If part of the home was used as a rental, home office, or business property, the tax analysis can become more complicated. Depreciation may need to be accounted for even when the home otherwise qualifies as a primary residence.',
          'Depreciation recapture and allocation rules can surprise sellers who rely only on the primary residence exclusion. Bring prior tax returns, depreciation schedules, rental records, and home office records to your tax preparer before closing if possible.',
        ],
      },
      {
        id: 'records',
        heading: 'Records to Gather Before You List',
        paragraphs: [
          'Gather the original closing statement from when you bought the home, records of major improvements, permits, contractor invoices, insurance or casualty paperwork, refinance records that may include settlement charges, and any documents related to business or rental use.',
          'Also keep your sale settlement statement. It may support selling expenses, payoffs, credits, and prorations. If you are unsure whether a line item affects taxable gain, mark it for your tax professional instead of guessing.',
        ],
      },
      {
        id: 'planning-with-calculator',
        heading: 'How to Plan Without Mixing the Numbers',
        paragraphs: [
          <>
            First estimate pre-tax proceeds: sale price minus mortgage payoff, seller concessions,
            commissions, closing costs, prorations, and title issues. Related guides on{' '}
            <a href="/blog/mortgage-payoff-amount-vs-current-balance" className="font-medium text-blue-600 underline">
              mortgage payoff amounts
            </a>
            ,{' '}
            <a href="/blog/how-seller-concessions-and-repair-credits-reduce-net-proceeds" className="font-medium text-blue-600 underline">
              seller concessions
            </a>
            , and{' '}
            <a href="/blog/property-tax-and-hoa-prorations-at-closing" className="font-medium text-blue-600 underline">
              prorations
            </a>{' '}
            can help with that cash estimate.
          </>,
          'Then estimate tax separately using current IRS rules, state rules, basis records, and professional advice. Keeping the two calculations separate prevents a common planning mistake: assuming the entire check from closing is taxable, or assuming none of it could be.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'A home sale can create two very different numbers: cash proceeds and taxable gain. Both matter, but they are built from different inputs.',
          'Use PropCalcHub for planning the settlement math, then verify tax treatment against current IRS guidance and your own records before making major decisions.',
        ],
      },
    ],
    faqs: [
      { question: 'Are seller proceeds the same as capital gain?', answer: 'No. Seller proceeds are the cash remaining after closing deductions. Capital gain is a tax calculation based on sale price, selling expenses, adjusted basis, and exclusions.' },
      { question: 'How much gain can I exclude on a primary home sale?', answer: 'Current IRS guidance generally allows up to $250,000 for qualifying single filers and up to $500,000 for qualifying married couples filing jointly.' },
      { question: 'What is adjusted basis?', answer: 'Adjusted basis generally starts with your cost and changes for items such as certain improvements, depreciation, casualty adjustments, and other tax-specific items.' },
      { question: 'Do repairs increase basis?', answer: 'Routine repairs often do not increase basis the same way capital improvements can. The distinction depends on the facts and tax rules.' },
      { question: 'Can rental use affect the exclusion?', answer: 'Yes. Rental or business use, especially depreciation, can complicate the gain calculation and may require professional tax review.' },
      { question: 'Should I estimate taxes in a seller net proceeds calculator?', answer: 'Use the calculator for pre-tax proceeds planning, then estimate taxes separately with current IRS guidance and a tax professional.' },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/mortgage-payoff-amount-vs-current-balance', label: 'Mortgage Payoff Amount vs Current Balance' },
      { href: '/blog/how-seller-concessions-and-repair-credits-reduce-net-proceeds', label: 'Seller Concessions and Repair Credits' },
      { href: '/blog/property-tax-and-hoa-prorations-at-closing', label: 'Property Tax and HOA Prorations at Closing' },
    ],
    sources: [
      { href: 'https://www.irs.gov/businesses/small-businesses-self-employed/sale-of-residence-real-estate-tax-tips', label: 'IRS sale of residence real estate tax tips' },
      { href: 'https://www.irs.gov/forms-pubs/about-publication-523', label: 'IRS About Publication 523' },
      { href: 'https://www.irs.gov/publications/p523', label: 'IRS Publication 523' },
      { href: 'https://www.irs.gov/taxtopics/tc701', label: 'IRS Topic 701' },
      { href: 'https://www.irs.gov/faqs/capital-gains-losses-and-sale-of-home', label: 'IRS capital gains and sale of home FAQ' },
      { href: 'https://www.youtube.com/watch?v=hK7Vi4X2_eg', label: 'My CPA Coach video on YouTube' },
    ],
    cta: (
      <>
        Start with pre-tax settlement math in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>
        , then verify tax treatment with current IRS guidance.
      </>
    ),
  },
  {
    slug: 'liens-title-issues-and-other-surprises-that-shrink-seller-proceeds',
    title: 'Liens, Title Issues, and Other Surprises That Shrink Seller Proceeds',
    metadataTitle: 'Liens, Title Issues, and Other Surprises That Shrink Seller Proceeds',
    description:
      'Learn which title problems can reduce or delay seller proceeds, and how to spot issues before they wreck your closing timeline.',
    media: {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=YJVs4rAQJhc',
      embedUrl: 'https://www.youtube.com/embed/YJVs4rAQJhc',
      channel: 'American Land Title Association',
    },
    readingMinutes: 10,
    wordCount: 1915,
    intro: [
      'A seller net sheet can look comfortable until title work uncovers a lien, release problem, unpaid assessment, ownership issue, or recording defect. Some issues only delay closing. Others reduce proceeds because money must be paid to clear title.',
      <>
        The earlier you identify title issues, the easier it is to model realistic proceeds in the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        and avoid last-minute surprises.
      </>,
    ],
    sections: [
      {
        id: 'marketable-title',
        heading: 'Why Marketable Title Matters',
        paragraphs: [
          'Most purchase contracts require the seller to deliver marketable or insurable title, subject to the contract terms and local practice. In plain English, the buyer and lender want confidence that the seller can transfer ownership and that required liens will be handled.',
          'Title insurance protects against covered title risks, but it does not magically erase every known lien or ownership problem. If a debt must be paid, released, subordinated, bonded, corrected, or otherwise cured, it can affect timing and proceeds.',
        ],
      },
      {
        id: 'common-liens',
        heading: 'Common Liens That Can Reduce Proceeds',
        paragraphs: [
          'Mortgage liens are expected when a seller has a home loan. The payoff is built into the closing statement. Problems arise when an old paid-off mortgage was never released, a home equity line is still open, or the payoff amount is different than expected.',
          'Other liens may include property tax liens, judgment liens, mechanic liens, HOA or condo association liens, municipal utility liens, code enforcement charges, child support liens, or government claims. The exact rules and priority vary by state and by lien type.',
          <>
            For mortgage payoff planning, start with{' '}
            <a href="/blog/mortgage-payoff-amount-vs-current-balance" className="font-medium text-blue-600 underline">
              Mortgage Payoff Amount vs Current Balance When You Sell
            </a>
            .
          </>,
        ],
      },
      {
        id: 'worked-risk-table',
        heading: 'Worked Risk Table: Title Issues to Watch',
        paragraphs: [
          'This table is a planning guide, not a legal diagnosis. The closing agent, title company, attorney, lender, local records office, association, or prior lienholder may need to resolve specific issues.',
        ],
        table: {
          headers: ['Issue', 'How It May Be Discovered', 'Possible Closing Delay', 'Possible Effect on Proceeds', 'Who May Help Resolve It', 'Documents to Gather'],
          rows: [
            ['Old unreleased mortgage', 'Title search finds prior lien', 'Moderate to high', 'Possible payoff research or release fee', 'Prior lender, title company, attorney', 'Old payoff letter, refinance closing statement'],
            ['Judgment lien', 'County or court record search', 'Moderate', 'May require payment from proceeds', 'Attorney, creditor, title company', 'Court records, satisfaction documents'],
            ['HOA lien or unpaid dues', 'Association status letter', 'Low to moderate', 'Past-due dues, fees, or transfer charges', 'HOA manager, closing agent', 'HOA ledger, resale package'],
            ['Property tax lien', 'Tax certificate or county search', 'Low to high', 'Unpaid taxes, interest, penalties', 'Tax office, title company', 'Tax bills, receipts'],
            ['Estate or probate issue', 'Review of vesting deed and ownership records', 'High', 'Legal fees, delayed sale, required approvals', 'Probate attorney, court, title company', 'Death certificate, probate orders, deeds'],
            ['Boundary or easement concern', 'Survey, title exception, buyer objection', 'Moderate', 'Survey, cure, legal, or negotiation cost', 'Surveyor, attorney, title company', 'Prior survey, easement documents'],
          ],
        },
      },
      {
        id: 'ownership-defects',
        heading: 'Ownership, Name, Probate, and Divorce Issues',
        paragraphs: [
          'Name discrepancies can look small but still slow closing: maiden names, trusts, LLC names, missing signatures, or inconsistent vesting can require affidavits or corrective documents. Divorce decrees, probate orders, estate documents, or powers of attorney may also be needed.',
          'If someone on title is deceased, unavailable, incapacitated, divorced, or disputing the sale, do not wait until the week of closing. These issues can require legal documents, court authority, or additional approvals.',
        ],
      },
      {
        id: 'cure-vs-insure',
        heading: 'Cure, Insure Over, or Pay at Closing',
        paragraphs: [
          'Some issues must be cured before closing. That may mean recording a release, correcting a deed, obtaining a satisfaction, paying a lien, or resolving a probate matter. Other issues may be insured over by the title insurer if the risk is acceptable under underwriting rules.',
          'Insuring over an issue is not the same as deleting the underlying problem. Sellers should ask what is being paid, what is being released, what remains of record, and whether any escrow holdback is required after closing.',
        ],
      },
      {
        id: 'documents',
        heading: 'Documents Sellers Should Gather Early',
        paragraphs: [
          'Collect mortgage statements, HELOC information, old refinance payoff records, release documents, property tax receipts, HOA ledgers, divorce orders, death certificates, probate paperwork, trust documents, surveys, permits, and any prior title policy if available.',
          <>
            Buyer-facing title service shopping is a different topic, but it can help explain the
            title company role. See{' '}
            <a href="/blog/title-insurance-and-closing-services-you-can-shop-for" className="font-medium text-blue-600 underline">
              Title Insurance and Closing Services You Can Shop For
            </a>
            .
          </>,
        ],
      },
      {
        id: 'net-sheet-impact',
        heading: 'How Title Surprises Change the Net Sheet',
        paragraphs: [
          <>
            A title issue affects proceeds when it adds a payoff, settlement, fee, legal cost,
            holdback, or closing delay. It can also interact with prorations. For example, unpaid
            taxes or HOA dues may overlap with the proration math explained in{' '}
            <a href="/blog/property-tax-and-hoa-prorations-at-closing" className="font-medium text-blue-600 underline">
              Property Tax and HOA Prorations at Closing
            </a>
            .
          </>,
          <>
            Once the settlement statement arrives, review every lien payoff, title charge, and
            credit. For document habits, revisit{' '}
            <a href="/blog/how-to-review-your-closing-disclosure" className="font-medium text-blue-600 underline">
              How to Review Your Closing Disclosure Before Signing
            </a>
            .
          </>,
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Title issues are not always dramatic, but they can be expensive if they surface late. The best seller strategy is early disclosure, early document gathering, and conservative proceeds planning.',
          'Use a preliminary net sheet, then update it as payoffs, liens, HOA items, taxes, and title charges become confirmed.',
        ],
      },
    ],
    faqs: [
      { question: 'Can a lien stop me from selling?', answer: 'It can delay or complicate closing if the lien must be paid, released, disputed, or otherwise resolved before title can transfer.' },
      { question: 'Will title insurance remove a known lien?', answer: 'No. Title insurance may cover certain risks, but known liens usually need to be addressed under the title companys requirements.' },
      { question: 'What if an old mortgage was paid off but still appears on title?', answer: 'The closing team may need a release, satisfaction, payoff evidence, or help from the prior lender before closing.' },
      { question: 'Can HOA dues reduce seller proceeds?', answer: 'Yes. Unpaid dues, association liens, transfer fees, resale package fees, and assessments can appear as seller charges.' },
      { question: 'Should I order title work before listing?', answer: 'In some situations, early title review can help identify problems before a buyer deadline creates pressure.' },
      { question: 'How do I estimate title surprises in a calculator?', answer: 'Use known payoff and lien amounts when available, and keep a buffer for unresolved title, tax, HOA, or legal items.' },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/mortgage-payoff-amount-vs-current-balance', label: 'Mortgage Payoff Amount vs Current Balance' },
      { href: '/blog/title-insurance-and-closing-services-you-can-shop-for', label: 'Title Insurance and Closing Services You Can Shop For' },
      { href: '/blog/how-to-review-your-closing-disclosure', label: 'How to Review Your Closing Disclosure Before Signing' },
      { href: '/blog/property-tax-and-hoa-prorations-at-closing', label: 'Property Tax and HOA Prorations at Closing' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'Consumer Financial Protection Bureau Closing Disclosure explainer' },
      { href: 'https://www.alta.org/', label: 'American Land Title Association' },
      { href: 'https://www.youtube.com/watch?v=YJVs4rAQJhc', label: 'American Land Title Association video on YouTube' },
    ],
    cta: (
      <>
        Add known lien, payoff, HOA, and title costs to the{' '}
        <a href="/seller-net-proceeds-calculator" className="font-medium text-blue-600 underline">
          Seller Net Proceeds Calculator
        </a>{' '}
        before relying on your estimated walk-away number.
      </>
    ),
  },
];

const sellerDecisionArticleMap = Object.fromEntries(
  sellerDecisionArticles.map((article) => [article.slug, article]),
);

export function getSellerDecisionArticle(slug: string) {
  const article = sellerDecisionArticleMap[slug];

  if (!article) {
    throw new Error(`Missing seller decision article for slug: ${slug}`);
  }

  return article;
}

export function getSellerDecisionMetadata(slug: string): Metadata {
  const article = getSellerDecisionArticle(slug);
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

function JsonLd({ article }: { article: SellerDecisionArticle }) {
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

function MediaSection({ article }: { article: SellerDecisionArticle }) {
  return (
    <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold">Watch the original video</h2>
      <div className="mt-5 overflow-hidden rounded-2xl bg-slate-950">
        <iframe
          className="aspect-video w-full"
          src={article.media.embedUrl}
          title={`${article.title} video from ${article.media.channel}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-sm text-slate-500">
        Video source: {article.media.channel} on YouTube
      </p>
    </section>
  );
}

export function SellerDecisionArticlePage({ slug }: { slug: string }) {
  const article = getSellerDecisionArticle(slug);
  const tocSections = article.sections.filter((section) => section.id !== 'final-thoughts');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd article={article} />
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            Seller Net Proceeds
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>By {authorName}</span>
            <span aria-hidden="true">|</span>
            <span>{article.readingMinutes} min read</span>
            <span aria-hidden="true">|</span>
            <span>{article.wordCount.toLocaleString()} words</span>
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

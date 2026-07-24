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

export type MortgageDecisionArticle = {
  slug: string;
  title: string;
  metadataTitle: string;
  description: string;
  video: {
    url: string;
    embedUrl: string;
    channel: string;
  };
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

export const mortgageDecisionArticles: MortgageDecisionArticle[] = [
  {
    slug: 'mortgage-points-vs-lender-credits',
    title: 'Mortgage Points vs Lender Credits',
    metadataTitle: 'Mortgage Points vs Lender Credits: Which Saves More?',
    description:
      "Learn how discount points and lender credits change your closing costs, rate, and break-even timeline-and test the numbers with PropCalcHub's Mortgage Calculator.",
    video: {
      url: 'https://www.youtube.com/watch?v=dTAUop7sO2k',
      embedUrl: 'https://www.youtube.com/embed/dTAUop7sO2k',
      channel: 'Redfin',
    },
    readingMinutes: 8,
    wordCount: 1678,
    intro: [
      <>
        Mortgage points and lender credits are two sides of the same pricing conversation. Points
        usually mean paying more at closing in exchange for a lower interest rate. Lender credits
        usually mean accepting a higher rate in exchange for less cash due upfront.
      </>,
      <>
        The problem is that many buyers compare only the monthly payment. That can hide the real
        tradeoff. A lower payment may not be worth a large upfront cost if you plan to refinance,
        sell, or pay off the loan soon. A lender credit may be useful if cash to close matters more
        than minimizing long-term interest. The right answer depends on your break-even timeline,
        available cash, and how long you realistically expect to keep the loan.
      </>,
    ],
    sections: [
      {
        id: 'discount-points',
        heading: 'What Mortgage Discount Points Are',
        paragraphs: [
          'A discount point is prepaid interest. One point usually equals 1% of the loan amount. On a $360,000 mortgage, one point would cost $3,600 at closing. In return, the lender may offer a lower interest rate than the no-point option.',
          'Points are not a separate investment product and they are not a fee you should judge in isolation. They are part of the loan pricing. The question is whether the monthly savings created by the lower rate are likely to repay the upfront cost before you leave the loan.',
          <>
            This is why points should be compared with the rest of the Loan Estimate, not as a
            standalone line item. If you want to understand the larger document, read{' '}
            <a href="/blog/how-to-compare-loan-estimates" className="font-medium text-blue-600 underline">
              How to Compare Loan Estimates Like a Pro
            </a>
            .
          </>,
        ],
      },
      {
        id: 'lender-credits',
        heading: 'What Lender Credits Are',
        paragraphs: [
          'A lender credit moves the tradeoff in the other direction. Instead of paying more upfront for a lower rate, you receive a credit from the lender that can reduce eligible closing costs. The tradeoff is usually a higher interest rate.',
          'Lender credits can be practical when cash is tight, when you need to preserve reserves after closing, or when you do not expect to keep the mortgage very long. They are not free money. You are generally paying for the credit through the rate and the monthly payment.',
          <>
            If your main concern is cash to close, pair this article with the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            so you can see how credits affect the amount due at settlement.
          </>,
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Three Ways to Price the Same Mortgage',
        paragraphs: [
          'Assume a $360,000, 30-year fixed mortgage. The exact rates a lender offers will vary, so this example is only a planning comparison. The point is the process: compare upfront cost or credit, monthly payment, and the break-even month.',
          'In this illustration, one discount point lowers the rate from 6.75% to 6.50%. A lender-credit option raises the rate to 7.00% but provides a $3,000 credit toward closing costs.',
        ],
        table: {
          headers: [
            'Option',
            'Upfront Cost or Credit',
            'Interest Rate',
            'Monthly Payment',
            'Monthly Difference',
            'Break-Even Month',
          ],
          rows: [
            ['Zero points', '$0', '6.75%', 'about $2,335', 'Baseline', 'Baseline'],
            ['One discount point', '$3,600 cost', '6.50%', 'about $2,275', 'Saves about $60/mo', 'about 60 months'],
            ['Lender credit', '$3,000 credit', '7.00%', 'about $2,395', 'Costs about $60/mo', 'Credit used up in about 50 months'],
          ],
        },
      },
      {
        id: 'break-even',
        heading: 'How to Calculate a Break-Even Timeline',
        paragraphs: [
          'For points, divide the upfront cost by the monthly savings. If one point costs $3,600 and saves about $60 per month, the simple break-even point is around 60 months. If you keep the loan longer than that, the points may begin to help. If you leave sooner, the no-point loan may have been cheaper.',
          'For lender credits, think in reverse. If the credit saves $3,000 upfront but increases the payment by about $60 per month, the credit is economically consumed after roughly 50 months. Before that point, the credit may have helped preserve cash. After that point, the higher payment can become more expensive.',
          'This simple break-even method does not capture every detail, such as taxes, opportunity cost, refinance costs, or the time value of money. But it is a useful first pass because it forces the decision out of vague payment shopping and into a timeline.',
        ],
      },
      {
        id: 'time-in-loan',
        heading: 'Why Expected Time in the Loan Matters',
        paragraphs: [
          'The key phrase is time in the loan, not necessarily time in the house. You might keep the home for ten years but refinance after two. In that case, points paid on the original loan may not have enough time to pay for themselves.',
          'Buyers sometimes overestimate how long they will keep a mortgage. Job changes, growing households, falling rates, divorce, relocation, and property upgrades can all shorten the timeline. A break-even calculation should use a realistic scenario, not the full 30-year term by default.',
          'On the other hand, if you are buying a long-term home, have strong cash reserves, and expect to keep the rate for many years, paying points may be more compelling. The longer the runway, the more time the lower payment has to offset the upfront cost.',
        ],
      },
      {
        id: 'lower-cash',
        heading: 'When Lower Cash to Close May Be More Valuable',
        paragraphs: [
          'A lower rate is attractive, but cash has its own value. A buyer who empties savings to buy points may be more vulnerable to repairs, job interruption, insurance deductibles, or moving costs. In that situation, a lender credit or zero-point option can be the more practical choice even if the long-term math is less elegant.',
          'This is especially true for first-time buyers who are still learning the true cost of ownership. A house can need appliances, plumbing work, landscaping, furniture, or immediate maintenance shortly after closing. Preserving reserves can be worth more than squeezing the rate down by a small amount.',
          <>
            Use the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            to compare the monthly side, then look at your post-closing cash position before you
            decide.
          </>,
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common Mistakes When Comparing Loan Options',
        paragraphs: [
          'The first mistake is comparing only the interest rate. A lower rate with high points may not be cheaper for a borrower with a short timeline. The second mistake is comparing only the monthly payment. A lower payment can be bought with cash at closing, and that cash has to come from somewhere.',
          'Another mistake is ignoring whether the rate is locked. A quote can change if the rate is floating, and a Loan Estimate should be read with attention to the lock status and expiration date. Also watch for lender credits that offset fees in one place while the rate rises somewhere else.',
          'Finally, do not assume one point always buys the same rate reduction. Pricing changes by lender, market, borrower profile, loan type, and date. Ask each lender to show comparable options on the same day so you are not comparing stale quotes.',
        ],
      },
      {
        id: 'calculator',
        heading: 'How to Test Each Scenario',
        paragraphs: [
          <>
            Run the no-point payment first in the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              PropCalcHub Mortgage Calculator
            </a>
            . Then change only the rate to model the point option and lender-credit option. Keep the
            loan amount and term constant so the comparison stays clean.
          </>,
          'Next, compare the monthly difference with the upfront cost or credit. Write down the break-even month, then ask whether your expected time in the loan is longer or shorter than that timeline.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Mortgage points and lender credits are not good or bad by themselves. They are pricing tools. Points may reward patience and a long timeline. Lender credits may help buyers preserve cash and reduce the burden of closing.',
          <>
            Run the same loan three ways in the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            before you choose points or lender credits.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Are mortgage points tax deductible?',
        answer:
          'They may be deductible in some situations, but tax treatment depends on the loan purpose, timing, and IRS rules. Review IRS guidance or ask a tax professional before relying on a deduction.',
      },
      {
        question: 'Does one point always reduce the interest rate by the same amount?',
        answer:
          'No. A point is a cost equal to 1% of the loan amount, but the rate reduction offered for that point changes by lender, market, loan type, and borrower profile.',
      },
      {
        question: 'Are lender credits free?',
        answer:
          'No. Lender credits usually reduce upfront costs in exchange for a higher interest rate or other pricing tradeoff.',
      },
      {
        question: 'Should I buy points if I may refinance or move soon?',
        answer:
          'Be cautious. If you leave the loan before the break-even month, the upfront cost may not have enough time to pay for itself.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/how-to-compare-loan-estimates', label: 'How to Compare Loan Estimates Like a Pro' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-are-discount-points-en-136/', label: 'CFPB discount points overview' },
      { href: 'https://www.irs.gov/publications/p936', label: 'IRS Publication 936' },
    ],
    cta: (
      <>
        Run the same loan three ways in the{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          Mortgage Calculator
        </a>{' '}
        before you choose points or lender credits.
      </>
    ),
  },
  {
    slug: 'how-to-remove-pmi-faster',
    title: 'How to Remove PMI Faster',
    metadataTitle: 'How to Remove PMI Faster on a Conventional Loan',
    description:
      'Understand PMI cancellation rules, 80% and 78% thresholds, and how faster principal paydown could change your monthly mortgage cost.',
    video: {
      url: 'https://www.youtube.com/watch?v=-3sSeaVzj2I',
      embedUrl: 'https://www.youtube.com/embed/-3sSeaVzj2I',
      channel: 'Freddie Mac',
    },
    readingMinutes: 8,
    wordCount: 1618,
    intro: [
      'Private mortgage insurance, usually called PMI, can make a conventional mortgage more expensive each month. It protects the lender, not the homeowner, but the homeowner usually pays for it when the down payment is below the required equity threshold.',
      'The good news is that PMI on many conventional loans does not have to last forever. The careful part is that early cancellation is not automatic just because your home value may have increased or because you feel close to 20% equity. Payment history, loan balance, property value, servicer rules, and documentation can all matter.',
    ],
    sections: [
      {
        id: 'what-pmi-is',
        heading: 'What Private Mortgage Insurance Is',
        paragraphs: [
          'PMI is insurance connected to many conventional mortgages with smaller down payments. It reduces lender risk when a borrower has less equity in the property. It is different from homeowners insurance, which protects the property owner against covered losses.',
          'PMI is also different from FHA mortgage insurance. FHA loans have their own mortgage insurance structure and cancellation rules. This article focuses on conventional loans, where borrower-requested cancellation and automatic termination rules can apply.',
          <>
            If you are comparing loan types before buying, use the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            to model the payment with and without monthly mortgage insurance.
          </>,
        ],
      },
      {
        id: 'thresholds',
        heading: 'The 80% Request Point and 78% Automatic Termination Point',
        paragraphs: [
          'For many conventional mortgages, homeowners may be able to request PMI cancellation when the loan balance reaches 80% of the home\'s original value. Original value generally means the lower of the purchase price or appraised value at the time the loan closed.',
          'Automatic termination is commonly tied to the date the loan is scheduled to reach 78% of original value, assuming the borrower is current. These thresholds are important, but they are not the whole story. Servicers may require a written request, good payment history, no junior liens, and evidence that the property value has not declined.',
          'Do not assume every borrower qualifies for early cancellation simply because an online estimate shows 20% equity. Contact the servicer and ask for the exact cancellation procedure for your loan.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Estimating PMI Removal',
        paragraphs: [
          'The numbers below show how the basic loan-to-value math works. The example does not guarantee approval, but it gives you a way to prepare before contacting your servicer.',
        ],
        table: {
          headers: [
            'Original Home Value',
            'Current Loan Balance',
            'Current LTV',
            'Estimated PMI',
            'Possible Request Point',
            'Automatic Termination Point',
            'Estimated Monthly Savings',
          ],
          rows: [
            ['$400,000', '$326,000', '81.5%', '$145/mo', '$320,000 balance', '$312,000 scheduled balance', 'about $145/mo'],
          ],
        },
      },
      {
        id: 'extra-payments',
        heading: 'How Extra Principal Payments May Move the Timeline Forward',
        paragraphs: [
          'Extra principal payments reduce the loan balance faster than the original schedule. If PMI cancellation is based on the balance reaching a threshold, faster principal paydown may help you reach the request point sooner.',
          <>
            The exact effect depends on your interest rate, payment schedule, and servicer rules. If
            you are thinking about making extra payments mainly to remove PMI, read{' '}
            <a
              href="/blog/extra-mortgage-payments-early-principal-paydown"
              className="font-medium text-blue-600 underline"
            >
              Extra Mortgage Payments and Early Principal Paydown
            </a>{' '}
            before sending extra funds.
          </>,
          'Ask the servicer how extra payments are applied and whether reaching 80% by actual payments changes the cancellation process. You want the extra money credited to principal, not held as a future payment.',
        ],
      },
      {
        id: 'value',
        heading: 'When Increased Property Value May Matter',
        paragraphs: [
          'Some borrowers ask about removing PMI because the home has appreciated. That can help in some cases, but it is not the same as reaching 80% based on the original amortization schedule.',
          'The servicer may require a broker price opinion, appraisal, or other property valuation. It may also require that enough time has passed, that the property has no subordinate liens, and that the payment history is clean.',
          'If your home value has risen sharply, ask the servicer what valuation method they accept and who must order it. Do not pay for an appraisal before confirming the process.',
        ],
      },
      {
        id: 'documents',
        heading: 'Documents to Gather Before You Contact the Servicer',
        paragraphs: [
          'Gather your current mortgage statement, original Closing Disclosure, purchase price or original appraisal information, payment history, and any evidence supporting current property value. If you made extra principal payments, collect records showing when and how they were applied.',
          'When you call or write, ask for the PMI cancellation department or procedure. Request the required form, the threshold they are using, whether a valuation is required, and how long the review usually takes.',
          'Keep copies of everything you submit. If the servicer denies the request, ask for the reason in writing and what would need to change before another request could be considered.',
        ],
      },
      {
        id: 'payment-after-pmi',
        heading: 'How to Estimate the Payment After PMI Is Removed',
        paragraphs: [
          <>
            Start with your current payment and separate principal and interest from escrow and PMI.
            Then remove only the PMI line. The{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            can help estimate the payment without PMI, but remember that taxes and insurance may
            still change.
          </>,
          'If PMI is removed, the monthly savings can improve cash flow. Some homeowners keep paying the same total amount and direct the old PMI amount toward principal, but that should be weighed against emergency savings and other priorities.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'PMI removal is a process, not a wish. The best approach is to know the thresholds, verify the servicer requirements, keep a strong payment history, and document the loan balance and property value carefully.',
          <>
            Estimate your payment without PMI using the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            before contacting your servicer.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do these PMI-removal rules apply to FHA loans?',
        answer:
          'No. FHA mortgage insurance follows different rules. Conventional PMI cancellation rules should not be applied to FHA loans.',
      },
      {
        question: 'What if my home has increased in value?',
        answer:
          'Appreciation may help in some cases, but servicer rules and valuation requirements matter. Ask before ordering an appraisal.',
      },
      {
        question: 'Can refinancing remove PMI?',
        answer:
          'Possibly. Refinancing into a new loan may remove PMI if the new loan-to-value and program qualify, but refinance costs and rate changes must be considered.',
      },
      {
        question: 'What should I do if my servicer denies my request?',
        answer:
          'Ask for the reason in writing, confirm the required threshold or documentation, and decide whether extra principal, more time, or a new valuation could support a later request.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/extra-mortgage-payments-early-principal-paydown', label: 'Extra Mortgage Payments and Early Principal Paydown' },
      { href: '/blog/how-mortgage-payments-are-calculated', label: 'How Mortgage Payments Are Calculated' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/', label: 'CFPB private mortgage insurance overview' },
      { href: 'https://guide.freddiemac.com/app/guide/section/8203.2', label: 'Freddie Mac servicing guidance on mortgage insurance cancellation' },
      { href: 'https://www.consumerfinance.gov/rules-policy/regulations/1024/17/', label: 'CFPB escrow servicing regulation' },
    ],
    cta: (
      <>
        Estimate your payment without PMI using the{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          Mortgage Calculator
        </a>{' '}
        before contacting your servicer.
      </>
    ),
  },
  {
    slug: 'why-your-mortgage-payment-went-up',
    title: 'Why Your Mortgage Payment Went Up',
    metadataTitle: 'Why Did My Mortgage Payment Go Up? Escrow Shortages Explained',
    description:
      'A fixed-rate mortgage payment can still rise when taxes or insurance increase. Learn how escrow shortages work and how to estimate the new payment.',
    video: {
      url: 'https://www.youtube.com/watch?v=hU--AVRaI8k',
      embedUrl: 'https://www.youtube.com/embed/hU--AVRaI8k',
      channel: 'Wise Money Show',
    },
    readingMinutes: 9,
    wordCount: 1726,
    intro: [
      'A fixed-rate mortgage keeps the principal-and-interest payment stable. It does not freeze the entire monthly payment forever. If your mortgage payment includes escrow for property taxes and homeowners insurance, the total amount can rise when those costs rise.',
      'That surprise often shows up after the servicer performs an annual escrow analysis. The statement may show higher taxes, higher insurance, an escrow shortage, or a new required cushion. Understanding the moving pieces can help you separate a normal escrow change from a possible error.',
    ],
    sections: [
      {
        id: 'fixed-rate',
        heading: 'Principal and Interest Versus the Total Payment',
        paragraphs: [
          'Principal and interest are the loan repayment pieces. On a fixed-rate mortgage, that part usually stays the same for the life of the loan. The total monthly payment may also include escrow deposits for property taxes, homeowners insurance, mortgage insurance, and sometimes other property-related items.',
          <>
            If your payment changed, start by separating these pieces. The{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            can help you rebuild the principal-and-interest estimate and compare it with the escrow
            portion on your statement.
          </>,
          'A payment increase does not automatically mean the lender changed your rate. It often means the escrow estimate changed.',
        ],
      },
      {
        id: 'escrow',
        heading: 'What an Escrow Account Pays For',
        paragraphs: [
          'An escrow account is a servicing account used to collect money for certain property expenses and pay them when due. Property taxes and homeowners insurance are the most common items.',
          'Instead of paying a large insurance bill or tax bill directly, you pay a monthly amount into escrow. The servicer estimates future bills, collects monthly deposits, and pays the actual bills from the account.',
          'Because the servicer is estimating future costs, escrow payments can change when actual bills are higher or lower than expected.',
        ],
      },
      {
        id: 'analysis',
        heading: 'What an Escrow Analysis Is',
        paragraphs: [
          'An escrow analysis is the annual review of the escrow account. The servicer looks at the bills paid, the projected bills, the account balance, and the required minimum balance. Then it recalculates the monthly escrow deposit.',
          'If the account did not have enough money to cover bills and the minimum cushion, the analysis may show a shortage. If it collected too much, it may show a surplus. Shortages are a common reason payments rise.',
          'Read the analysis line by line. Look for the old tax bill, the new tax bill, the insurance premium, the shortage amount, and the new monthly escrow requirement.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: How a Payment Increase Happens',
        paragraphs: [
          'This simplified example shows how several changes can combine. The principal-and-interest payment did not change, but the total monthly payment did.',
        ],
        table: {
          headers: ['Item', 'Previous Amount', 'New Amount', 'Monthly Effect'],
          rows: [
            ['Annual property taxes', '$4,800', '$5,760', '+$80/mo'],
            ['Homeowners insurance premium', '$1,500', '$2,100', '+$50/mo'],
            ['Escrow shortage', '$0', '$720', '+$60/mo for 12 months'],
            ['Principal and interest', '$2,023/mo', '$2,023/mo', '$0'],
            ['Total monthly payment', '$2,548/mo', '$2,738/mo', '+$190/mo'],
          ],
        },
      },
      {
        id: 'shortage',
        heading: 'What Creates an Escrow Shortage',
        paragraphs: [
          'A shortage can happen when the servicer paid more from escrow than it collected. Property-tax reassessments are a common cause, especially after a home purchase when the assessed value or exemptions change.',
          'Insurance increases can also create a shortage. Premiums may rise because of local risk, replacement-cost estimates, claims history, policy changes, or broader insurance-market conditions.',
          'Undercollection can make the issue feel delayed. If the servicer estimated too low last year, the new payment may need to cover both the higher future cost and the shortage from the prior cycle.',
        ],
      },
      {
        id: 'shortage-options',
        heading: 'Lump Sum Versus Spreading the Shortage',
        paragraphs: [
          'Many servicers allow borrowers to repay an escrow shortage in one lump sum or spread it over future monthly payments, often over 12 months. The available options depend on the servicer and the account.',
          'Paying the shortage in one lump sum may reduce the temporary repayment part of the new payment, but it will not erase the increase caused by higher projected taxes or insurance. Spreading the shortage protects cash but raises the payment for the repayment period.',
          'Before paying a lump sum, ask the servicer to show the payment both ways. That helps you avoid using savings only to discover the payment still rose because future bills are higher.',
        ],
      },
      {
        id: 'review',
        heading: 'How to Review the Annual Escrow Statement',
        paragraphs: [
          'Compare each tax and insurance amount with bills from your county, insurer, or insurance declarations page. Confirm the property, parcel number, policy period, and any exemptions.',
          'If taxes jumped, check whether an assessment appeal, homestead exemption, senior exemption, or local correction process may apply. If insurance jumped, consider shopping coverage, adjusting deductibles, or asking whether coverage assumptions changed.',
          'Do not ignore the notice. Even if you plan to dispute a tax or insurance amount, the servicer may still need to collect enough to keep the account funded until the bill changes.',
        ],
      },
      {
        id: 'model',
        heading: 'How to Model the Revised Payment',
        paragraphs: [
          <>
            Use the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            to keep principal and interest separate from taxes and insurance. Enter the same loan
            amount, rate, and term, then update only taxes and insurance.
          </>,
          'If your servicer added a shortage repayment, add that separately in your household budget. That keeps the ongoing escrow increase distinct from the temporary repayment amount.',
          <>
            For broader payment mechanics, see{' '}
            <a href="/blog/how-mortgage-payments-are-calculated" className="font-medium text-blue-600 underline">
              How Mortgage Payments Are Calculated
            </a>
            .
          </>,
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'A fixed-rate mortgage can still produce a higher total payment because the escrow portion is tied to real bills. Taxes and insurance are not frozen by the loan rate.',
          <>
            Use the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            to separate principal and interest from taxes and insurance so you can identify what
            changed.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Why did my payment rise even though I have a fixed interest rate?',
        answer:
          'The fixed rate usually controls principal and interest. Taxes, insurance, and escrow requirements can still change.',
      },
      {
        question: 'Can I pay the escrow shortage all at once?',
        answer:
          'Many servicers allow it, but ask how the payment changes before and after a lump-sum payment.',
      },
      {
        question: 'Can I waive or remove escrow?',
        answer:
          'Sometimes, depending on loan type, equity, lender rules, and state law. Some loans require escrow.',
      },
      {
        question: 'How much escrow cushion can a servicer collect?',
        answer:
          'Federal rules generally limit cushions, but exact servicing details can vary. Review your escrow statement and CFPB guidance.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/how-mortgage-payments-are-calculated', label: 'How Mortgage Payments Are Calculated' },
      { href: '/blog/how-to-compare-loan-estimates', label: 'How to Compare Loan Estimates Like a Pro' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-escrow-or-impound-account-en-140/', label: 'CFPB escrow account overview' },
      { href: 'https://www.consumerfinance.gov/rules-policy/regulations/1024/17/', label: 'CFPB escrow account regulation' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/', label: 'CFPB Closing Disclosure explainer' },
    ],
    cta: (
      <>
        Use the{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          Mortgage Calculator
        </a>{' '}
        to separate principal and interest from taxes and insurance so you can identify what
        changed.
      </>
    ),
  },
  {
    slug: 'extra-mortgage-payments-early-principal-paydown',
    title: 'Extra Mortgage Payments and Early Principal Paydown',
    metadataTitle: 'Extra Mortgage Payments: When Paying Principal Early Makes Sense',
    description:
      'See how extra principal payments can shorten your loan, reduce interest, and change your payoff timeline-without guessing.',
    video: {
      url: 'https://www.youtube.com/watch?v=8emVP6dhZyk',
      embedUrl: 'https://www.youtube.com/embed/8emVP6dhZyk',
      channel: 'School of Personal Finance',
    },
    readingMinutes: 9,
    wordCount: 1744,
    intro: [
      'Extra mortgage payments can be powerful because they reduce principal earlier than scheduled. A lower balance means less future interest, and less future interest can shorten the payoff timeline.',
      'But early paydown is not only a math decision. It is also a liquidity decision. Money sent to the mortgage is money not held for emergencies, repairs, retirement contributions, business needs, or higher-interest debt. The strongest plan compares the interest savings with the flexibility you give up.',
    ],
    sections: [
      {
        id: 'principal',
        heading: 'What Happens When Extra Money Is Applied to Principal',
        paragraphs: [
          'A standard mortgage payment includes interest due for the month and a principal portion that reduces the balance. When you send extra principal, the balance falls faster than the original schedule expected.',
          'That lower balance affects future interest because mortgage interest is calculated against what you still owe. Extra principal does not usually change the required monthly payment on a fixed-rate loan, but it can shorten the number of payments needed to pay the loan off.',
          'The phrase applied to principal matters. If the servicer treats the extra money as a future scheduled payment, you may not get the intended interest benefit. Use the servicer instructions for principal-only payments.',
        ],
      },
      {
        id: 'future-interest',
        heading: 'How Principal Reduction Affects Future Interest',
        paragraphs: [
          'The earlier a principal reduction happens, the more months it has to reduce future interest. That is why an extra payment in year two usually saves more interest than the same extra payment in year twenty-eight.',
          <>
            This connects directly to amortization. If you need the baseline first, read{' '}
            <a href="/blog/what-is-an-amortization-schedule" className="font-medium text-blue-600 underline">
              What Is an Amortization Schedule?
            </a>{' '}
            and then come back to the extra-payment comparison.
          </>,
          'Extra payments are most useful when they are consistent, affordable, and actually credited to the balance.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Four Paydown Strategies',
        paragraphs: [
          'Assume a $320,000, 30-year fixed mortgage at 6.5% with a scheduled principal-and-interest payment of about $2,023. These estimates are rounded, but the payoff timing and interest savings are mathematically consistent.',
        ],
        table: {
          headers: ['Strategy', 'Additional Annual Amount', 'Estimated Payoff Time', 'Time Saved', 'Estimated Interest Saved'],
          rows: [
            ['Normal scheduled payments', '$0', '30 years', 'None', '$0'],
            ['Additional $100 per month', '$1,200', 'about 26 years, 2 months', 'about 3 years, 10 months', 'about $61,700'],
            ['Additional $250 per month', '$3,000', 'about 22 years, 3 months', 'about 7 years, 9 months', 'about $123,000'],
            ['One additional full payment per year', 'about $2,023', 'about 24 years, 4 months', 'about 5 years, 8 months', 'about $89,600'],
          ],
        },
      },
      {
        id: 'monthly-vs-lump',
        heading: 'Monthly Extra Payments Versus Annual Lump Sums',
        paragraphs: [
          'Monthly extra payments are simple and steady. They reduce the balance a little faster every month, and they can be easier to automate.',
          'Annual lump sums can work well for bonuses, tax refunds, or irregular income. The downside is that waiting until year-end delays the principal reduction compared with sending smaller amounts earlier.',
          'The best method is the one you can maintain without starving cash reserves. Consistency matters, but flexibility matters too.',
        ],
      },
      {
        id: 'biweekly',
        heading: 'Biweekly Payment Claims and How to Evaluate Them',
        paragraphs: [
          'Biweekly payment plans are often advertised as a way to pay off a mortgage faster. The common benefit comes from making half a payment every two weeks, which creates 26 half-payments, or 13 full payments, per year.',
          'That can be similar to making one additional full payment each year. The key is whether the plan actually sends extra principal and whether it charges fees.',
          'You do not need a paid third-party plan to get the same basic effect in many cases. You may be able to make your normal monthly payment and add a separate principal payment yourself.',
        ],
      },
      {
        id: 'tradeoffs',
        heading: 'Emergency Reserves, Investing, and Higher-Interest Debt',
        paragraphs: [
          'Paying down a mortgage can produce interest savings, but those savings are not the only use of cash. If you have no emergency fund, high-interest credit-card debt, or underfunded insurance deductibles, extra mortgage payments may not be the first priority.',
          'Investment comparisons require humility. Future investment returns are not guaranteed, and neither are future refinance opportunities. The practical question is whether the mortgage paydown fits your risk tolerance and household plan.',
          <>
            If PMI removal is part of your motivation, compare this article with{' '}
            <a href="/blog/how-to-remove-pmi-faster" className="font-medium text-blue-600 underline">
              How to Remove PMI Faster
            </a>
            .
          </>,
        ],
      },
      {
        id: 'servicer',
        heading: 'How to Make Sure Extra Funds Go to Principal',
        paragraphs: [
          'Before sending extra money, check whether your loan has a prepayment penalty. Many residential mortgages do not, but you should not assume. Review the note, closing documents, and servicer instructions.',
          'Use the servicer portal or payment coupon field that specifically says principal-only or additional principal. After the payment posts, confirm the transaction history shows a principal reduction.',
          'If the servicer misapplies the funds, contact them quickly and keep records. Small servicing mistakes can weaken the benefit of a carefully planned paydown strategy.',
        ],
      },
      {
        id: 'calculator',
        heading: 'How to Compare Multiple Payment Strategies',
        paragraphs: [
          <>
            Model the regular payment first in the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            . Then compare the effect of extra monthly payments, annual lump sums, or one additional
            payment per year.
          </>,
          'Look at more than payoff date. Compare interest saved, cash required, reserves left over, and whether the plan still works if income drops or expenses rise.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'Early principal paydown can be a smart, low-drama way to reduce interest and shorten a loan. It can also be too aggressive if it leaves you cash-poor.',
          <>
            Model the regular payment first, then compare extra-principal scenarios using the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do extra mortgage payments automatically go toward principal?',
        answer:
          'Not always. Follow the servicer instructions for principal-only payments and confirm the payment history after it posts.',
      },
      {
        question: 'Is biweekly payment the same as making one extra payment each year?',
        answer:
          'Many biweekly plans create 13 full payments per year, which is similar to one extra annual payment, but fees and payment handling matter.',
      },
      {
        question: 'Could my loan have a prepayment penalty?',
        answer:
          'Some loans can have prepayment restrictions. Review your loan documents or ask the servicer before making large extra payments.',
      },
      {
        question: 'Should I make extra payments if I may sell soon?',
        answer:
          'Maybe, but the benefit may be smaller with a short timeline. Compare the interest saved with the value of keeping cash available.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/how-to-remove-pmi-faster', label: 'How to Remove PMI Faster' },
      { href: '/blog/what-is-an-amortization-schedule', label: 'What Is an Amortization Schedule?' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/ask-cfpb/can-i-pay-off-my-loan-ahead-of-schedule-en-141/', label: 'CFPB prepayment overview' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
      { href: 'https://guide.freddiemac.com/app/guide/section/8203.2', label: 'Freddie Mac mortgage insurance servicing guidance' },
    ],
    cta: (
      <>
        Model the regular payment first, then compare extra-principal scenarios using the{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          Mortgage Calculator
        </a>
        .
      </>
    ),
  },
  {
    slug: 'how-to-compare-loan-estimates',
    title: 'How to Compare Loan Estimates Like a Pro',
    metadataTitle: 'How to Compare Loan Estimates Like a Pro',
    description:
      'Learn how to compare rates, APR, points, lender credits, and cash to close so you can choose the best mortgage offer-not just the lowest headline rate.',
    video: {
      url: 'https://www.youtube.com/watch?v=mUsZiIpuFnU',
      embedUrl: 'https://www.youtube.com/embed/mUsZiIpuFnU',
      channel: 'KSATnews',
    },
    readingMinutes: 9,
    wordCount: 1692,
    intro: [
      'A Loan Estimate is designed to help borrowers compare mortgage offers, but it can still feel dense. Rate, APR, points, lender credits, origination charges, services, escrows, and cash to close all compete for attention.',
      'The easiest mistake is choosing the offer with the lowest headline rate or the lowest monthly payment without asking what it costs to get that rate. A better comparison looks at short-term cash, long-term cost, and whether the assumptions are truly comparable.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'What the Loan Estimate Is',
        paragraphs: [
          'The Loan Estimate is a standardized mortgage disclosure that lenders provide after an application. It summarizes key loan terms, projected payments, estimated closing costs, cash to close, and other details.',
          'Because the format is standardized, borrowers can place two or three estimates side by side and compare the same categories. That is the point: not to admire one document, but to compare offers.',
          <>
            After you identify the strongest offer, use the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            to pressure-test the payment assumptions.
          </>,
        ],
      },
      {
        id: 'multiple-lenders',
        heading: 'Why Compare Estimates From Multiple Lenders',
        paragraphs: [
          'Mortgage pricing varies. Two lenders can quote different rates, fees, credits, and lock terms for the same borrower. Without multiple estimates, you may not know whether an offer is competitive.',
          'Try to compare estimates requested close together in time and with the same loan amount, loan type, term, down payment, property taxes, insurance assumptions, and lock status. Otherwise you may be comparing different scenarios rather than different lenders.',
          'If one lender changes several assumptions, ask them to reissue or explain the quote so the comparison is fair.',
        ],
      },
      {
        id: 'rate-apr',
        heading: 'Interest Rate Versus APR',
        paragraphs: [
          'The interest rate drives the principal-and-interest payment. APR attempts to express the cost of credit more broadly by including certain costs. Both numbers are useful, but neither tells the whole story alone.',
          'A lower rate with higher points can have a higher upfront cost. A higher rate with lender credits can lower cash to close. APR can help compare cost, but you still need to understand the fees behind it and your expected time in the loan.',
          <>
            For the points and credits piece specifically, see{' '}
            <a href="/blog/mortgage-points-vs-lender-credits" className="font-medium text-blue-600 underline">
              Mortgage Points vs Lender Credits
            </a>
            .
          </>,
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked Example: Comparing Three Lenders',
        paragraphs: [
          'This example uses hypothetical offers for the same borrower and loan structure. The best choice depends on time horizon and cash needs, not only the lowest rate.',
        ],
        table: {
          headers: [
            'Lender',
            'Interest Rate',
            'APR',
            'Points',
            'Lender Credits',
            'Lender Fees',
            'Monthly Principal and Interest',
            'Estimated Cash to Close',
            'Break-Even Consideration',
          ],
          rows: [
            ['Lender A', '6.50%', '6.72%', '$3,600', '$0', '$1,250', '$2,275', '$42,000', 'Needs a longer hold to justify points'],
            ['Lender B', '6.75%', '6.91%', '$0', '$0', '$1,100', '$2,335', '$38,300', 'Clean baseline for comparison'],
            ['Lender C', '7.00%', '7.08%', '$0', '$3,000', '$1,400', '$2,395', '$35,600', 'Lower cash now, higher monthly cost'],
          ],
        },
      },
      {
        id: 'fees',
        heading: 'Points, Lender Credits, and Lender-Controlled Fees',
        paragraphs: [
          'Origination charges, underwriting fees, processing fees, discount points, and credits deserve close attention because they are often controlled by the lender or tied directly to loan pricing.',
          'Do not look only at the total closing costs line. A lender may appear cheaper because prepaid taxes or insurance are estimated differently, while lender-controlled charges are actually higher.',
          'Ask each lender to explain whether credits are temporary promotions, rate tradeoffs, or pricing adjustments. The explanation should match the Loan Estimate.',
        ],
      },
      {
        id: 'services',
        heading: 'Services You Can and Cannot Shop For',
        paragraphs: [
          'The Loan Estimate separates some services borrowers can shop for from services they cannot shop for. This matters because a lender may control some costs directly while other third-party services depend on provider selection or local practice.',
          'Title, settlement, survey, pest inspection, and similar items may be shoppable in some transactions. Government charges and prepaid items may be less negotiable, though the estimates still need to be reviewed.',
          'When comparing lenders, focus first on rate, points, credits, and lender fees. Then compare third-party and prepaid assumptions so you understand what changed by lender and what changed by estimate.',
        ],
      },
      {
        id: 'cash-to-close',
        heading: 'Cash to Close, Rate Locks, and Expiration Dates',
        paragraphs: [
          'Cash to close combines down payment, closing costs, credits, deposits, and adjustments. A loan with a slightly higher payment but much lower cash to close may be attractive for a buyer who needs to preserve reserves.',
          'Rate-lock status matters too. An estimate with a locked rate is not the same as a floating quote. Check the lock period, expiration date, and whether the closing timeline fits.',
          <>
            If you are still building your purchase budget, the{' '}
            <a href="/buyer-closing-cost-calculator" className="font-medium text-blue-600 underline">
              Buyer Closing Cost Calculator
            </a>{' '}
            can help separate down payment from closing costs and credits.
          </>,
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red Flags in Revised Loan Estimates',
        paragraphs: [
          'A revised Loan Estimate is not automatically a problem. Details can change when the property, loan amount, rate lock, borrower information, or valid changed circumstances change. But unexplained changes deserve questions.',
          'Watch for new points, disappearing lender credits, higher origination charges, different lock status, large changes in cash to close, or assumptions that no longer match the offer you accepted.',
          'Ask the lender to walk through what changed and why. Keep copies of each version so you can compare the progression.',
        ],
      },
      {
        id: 'calculator',
        heading: 'How to Pressure-Test the Preferred Offer',
        paragraphs: [
          <>
            Once you choose the strongest-looking estimate, enter the loan amount, rate, term, taxes,
            insurance, PMI, and HOA assumptions into the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            .
          </>,
          'Then compare the calculator result with the projected payment. If the numbers differ, identify whether the difference is principal and interest, mortgage insurance, taxes, insurance, HOA dues, or another assumption.',
          'For credit-shopping questions, avoid absolute internet rules. Scoring models and borrower circumstances differ, so review authoritative guidance and ask lenders how they handle timing and documentation.',
        ],
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        paragraphs: [
          'A good Loan Estimate comparison is not about finding one magic number. It is about understanding the tradeoff between rate, APR, points, credits, lender fees, cash to close, and time in the loan.',
          <>
            Once you choose the strongest Loan Estimate, verify its payment assumptions using the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I compare APR or monthly payment?',
        answer:
          'Compare both, plus cash to close and fees. APR helps with broader credit cost, while the monthly payment shows budget impact.',
      },
      {
        question: 'How should I compare an offer containing lender credits?',
        answer:
          'Compare the credit with the higher payment it may create. Then decide whether lower upfront cash is worth the long-term cost.',
      },
      {
        question: 'How long can I shop for mortgages without repeated credit-score damage?',
        answer:
          'Credit-scoring models and circumstances differ. Review CFPB or credit-bureau guidance and try to keep lender shopping organized in a focused time period.',
      },
      {
        question: 'What should I do if the Loan Estimate changes?',
        answer:
          'Ask what changed, why it changed, and whether the rate lock, points, credits, or loan assumptions are different. Keep earlier versions for comparison.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/mortgage-points-vs-lender-credits', label: 'Mortgage Points vs Lender Credits' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/blog', label: 'All PropCalcHub Articles' },
    ],
    sources: [
      { href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/', label: 'CFPB Loan Estimate explainer' },
      { href: 'https://www.consumerfinance.gov/owning-a-home/compare-loan-offers/', label: 'CFPB compare loan offers' },
      { href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-apr-en-733/', label: 'CFPB APR overview' },
    ],
    cta: (
      <>
        Once you choose the strongest Loan Estimate, verify its payment assumptions using the{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          Mortgage Calculator
        </a>
        .
      </>
    ),
  },
];

export const mortgageDecisionArticleMap = Object.fromEntries(
  mortgageDecisionArticles.map((article) => [article.slug, article])
) as Record<string, MortgageDecisionArticle>;

export function getMortgageDecisionArticle(slug: string) {
  const article = mortgageDecisionArticleMap[slug];

  if (!article) {
    throw new Error(`Missing mortgage decision article for slug: ${slug}`);
  }

  return article;
}

export function getMortgageDecisionMetadata(slug: string): Metadata {
  const article = getMortgageDecisionArticle(slug);
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

function JsonLd({ article }: { article: MortgageDecisionArticle }) {
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
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${siteUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: canonical,
          },
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

export function MortgageDecisionArticlePage({ slug }: { slug: string }) {
  const article = getMortgageDecisionArticle(slug);
  const tocSections = article.sections.filter((section) => section.id !== 'final-thoughts');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd article={article} />
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            Mortgage
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

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Watch the original video</h2>
          <div className="mt-5 overflow-hidden rounded-2xl bg-slate-950">
            <iframe
              className="aspect-video w-full"
              src={article.video.embedUrl}
              title={`${article.title} video from ${article.video.channel}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Video source: {article.video.channel} on YouTube
          </p>
        </section>

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

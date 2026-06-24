import AdSlot from '@/components/AdSlot';

type Table = {
  headers: string[];
  rows: string[][];
};

type Section = {
  heading: string;
  paragraphs: React.ReactNode[];
  table?: Table;
};

type Faq = {
  question: string;
  answer: string;
};

type Video = {
  url: string;
  embedUrl: string;
  channel: string;
};

export type ContentArticle = {
  slug: string;
  cluster: 'Mortgage' | 'Buyer Closing Costs' | 'Seller Net Proceeds';
  title: string;
  description: string;
  video: Video;
  intro: React.ReactNode[];
  sections: Section[];
  faqs: Faq[];
  relatedLinks: { href: string; label: string }[];
  sources: string[];
};

const disclaimer =
  'This article is for informational and planning purposes only and is not financial, tax, legal, lending, or real estate advice.';

export const contentExpansionArticles: ContentArticle[] = [
  {
    slug: 'how-mortgage-payments-are-calculated',
    cluster: 'Mortgage',
    title: 'How Mortgage Payments Are Calculated',
    description:
      'Learn how mortgage payments are calculated, what principal and interest really mean, and why your total monthly housing payment is usually higher than the base loan payment.',
    video: {
      url: 'https://www.youtube.com/watch?v=y-1Gh4ewklY',
      embedUrl: 'https://www.youtube.com/embed/y-1Gh4ewklY',
      channel: 'Khan Academy',
    },
    intro: [
      <>
        A mortgage payment is not the loan amount divided evenly over 30 years. Most fixed-rate
        mortgages are amortized, which means the lender uses the loan balance, interest rate, and
        number of payments to create a steady principal-and-interest payment.
      </>,
      <>
        Your real monthly housing cost can be higher because taxes, homeowners insurance, mortgage
        insurance, and HOA dues may sit on top of the base loan payment. Use the{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          mortgage calculator
        </a>{' '}
        while you read to compare your own numbers.
      </>,
    ],
    sections: [
      {
        heading: 'Why the advertised payment is not the full housing cost',
        paragraphs: [
          'Loan calculators often show principal and interest first because that is the part created by the mortgage formula. It is useful, but it is not the whole monthly obligation for many buyers.',
          'Property taxes, homeowners insurance, private mortgage insurance, FHA mortgage insurance, flood insurance, and HOA dues can all change the monthly number. Escrowed taxes and insurance can also change over time even when a fixed interest rate does not.',
        ],
      },
      {
        heading: 'The mortgage formula in plain English',
        paragraphs: [
          'The standard formula starts with the loan amount, converts the annual interest rate into a monthly rate, and spreads repayment over the number of monthly payments in the term. A 30-year loan has 360 payments; a 15-year loan has 180.',
          'The output is the principal-and-interest payment. It answers: what fixed monthly payment would fully repay this loan, with interest, by the end of the term?',
        ],
      },
      {
        heading: 'Principal, interest, taxes, insurance, and PMI',
        paragraphs: [
          'Principal is the part of the payment that reduces the loan balance. Interest is the lender charge for borrowing money. Taxes and insurance are property ownership costs. PMI or other mortgage insurance may apply when the down payment is smaller or the loan program requires it.',
          'The useful planning move is to separate these pieces. If the principal-and-interest payment looks affordable but the all-in payment does not, the purchase price, down payment, loan type, or budget target may need another look.',
        ],
        table: {
          headers: ['Input', 'Example'],
          rows: [
            ['Home price', '$400,000'],
            ['Down payment', '$80,000'],
            ['Loan amount', '$320,000'],
            ['Interest rate', '6.50%'],
            ['Term', '30 years'],
            ['Estimated principal + interest', 'about $2,023'],
            ['Estimated taxes', '$350'],
            ['Estimated insurance', '$125'],
            ['Estimated PMI', '$140'],
            ['Estimated total payment', 'about $2,638'],
          ],
        },
      },
      {
        heading: 'Why more of your early payment goes to interest',
        paragraphs: [
          'Interest is charged on the unpaid balance. Early in the loan, that balance is still large, so the interest portion takes up more of each payment. As the balance falls, less interest is due and more of the same payment goes to principal.',
          <>
            That shift is easier to see in an{' '}
            <a
              href="/blog/what-is-an-amortization-schedule"
              className="font-medium text-blue-600 underline"
            >
              amortization schedule
            </a>
            .
          </>,
        ],
      },
      {
        heading: 'How to use PropCalcHub for the estimate',
        paragraphs: [
          <>
            Enter the home price, down payment, rate, term, taxes, insurance, PMI, and HOA dues in
            the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            . Then compare the base loan payment with the total estimated payment.
          </>,
          <>
            If you are also planning cash to close, pair the estimate with the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              buyer closing cost calculator
            </a>
            .
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          'Mortgage math is manageable once you separate the pieces. The formula creates the loan payment, but your budget has to absorb the full housing payment.',
          'Before relying on any estimate, compare it with lender disclosures, tax records, insurance quotes, and your own comfort level.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between principal and interest?',
        answer:
          'Principal reduces the amount you owe. Interest is the cost of borrowing money and is based on the unpaid balance and rate.',
      },
      {
        question: 'Why is my total monthly payment higher than the loan payment?',
        answer:
          'Taxes, homeowners insurance, mortgage insurance, and HOA dues may be included in your housing budget even though they are not part of the principal-and-interest formula.',
      },
      {
        question: 'Can taxes and insurance change?',
        answer:
          'Yes. Property taxes and insurance premiums can change over time, so an escrowed monthly payment can move even on a fixed-rate mortgage.',
      },
      {
        question: 'Should I estimate HOA separately?',
        answer:
          'Yes. HOA dues are not part of the loan formula, but they affect affordability and should be included in your monthly housing budget.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/blog/what-is-an-amortization-schedule', label: 'What Is an Amortization Schedule?' },
    ],
    sources: [
      'CFPB mortgage payment and escrow explainers',
      'Fannie Mae mortgage calculator guidance',
      'CFPB mortgage payoff and amortization materials',
    ],
  },
  {
    slug: '15-year-vs-30-year-mortgage-pros-and-cons',
    cluster: 'Mortgage',
    title: '15-Year vs 30-Year Mortgage: Pros and Cons',
    description:
      'Compare 15-year and 30-year mortgages, including monthly payment, total interest, equity buildup, and when each term may make sense.',
    video: {
      url: 'https://www.youtube.com/watch?v=BJ3xhjqk52A',
      embedUrl: 'https://www.youtube.com/embed/BJ3xhjqk52A',
      channel: 'Graham Stephan',
    },
    intro: [
      'A 15-year mortgage usually has a higher monthly payment, less total interest, and faster equity growth. A 30-year mortgage usually has a lower required payment and more budget flexibility, but the extra time can make total interest much larger.',
      <>
        The best choice is not always the shortest term. It depends on income stability, emergency
        reserves, investment priorities, and how long you expect to keep the home. The{' '}
        <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
          Mortgage Calculator
        </a>{' '}
        can help compare both terms side by side.
      </>,
    ],
    sections: [
      {
        heading: 'Why the term changes more than the payment',
        paragraphs: [
          'The loan term controls how quickly the debt must be repaid. A shorter term compresses repayment into fewer months, so each required payment is higher.',
          'That same shorter term also means the balance falls faster and interest has less time to accumulate. This is why the total-cost difference can look dramatic even when the loan amount is identical.',
        ],
      },
      {
        heading: 'Monthly payment versus total interest',
        paragraphs: [
          'Monthly affordability and lifetime interest are two different questions. A lower 30-year payment may fit a household budget better, while a 15-year payment can save interest for borrowers who can handle the higher obligation.',
          'The tradeoff is clearest when the loan amount is the same and only the rate and term change.',
        ],
        table: {
          headers: ['Loan detail', '15-year', '30-year'],
          rows: [
            ['Loan amount', '$320,000', '$320,000'],
            ['Rate', '5.90%', '6.50%'],
            ['Principal + interest', 'about $2,684', 'about $2,023'],
            ['Total paid over full term', 'about $483,120', 'about $728,280'],
            ['Total interest', 'about $163,120', 'about $408,280'],
          ],
        },
      },
      {
        heading: 'Equity buildup and flexibility',
        paragraphs: [
          'A 15-year loan builds equity faster because more principal is paid sooner. That can help if you want to own the home outright earlier or reduce interest risk quickly.',
          'A 30-year loan preserves more monthly cash. Some buyers value that flexibility for repairs, childcare, retirement contributions, emergency savings, or income changes.',
        ],
      },
      {
        heading: 'Who may prefer a 15-year loan',
        paragraphs: [
          'A 15-year mortgage can fit borrowers with strong cash flow, low non-housing debt, stable income, and a clear desire to minimize interest.',
          'It can be less comfortable for buyers who would have to drain savings or stretch every month to make the payment.',
        ],
      },
      {
        heading: 'Who may prefer a 30-year loan',
        paragraphs: [
          'A 30-year mortgage may fit buyers who want a lower required payment, expect big life expenses, or prefer to keep more liquidity.',
          'Some borrowers take a 30-year loan and make extra payments when cash flow allows. That can reduce interest without locking in the higher required payment of a 15-year loan.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            Cheap monthly does not always mean cheap overall, and lower total interest does not
            automatically make a payment comfortable. Use a full housing-payment estimate and read{' '}
            <a
              href="/blog/how-much-house-can-i-afford"
              className="font-medium text-blue-600 underline"
            >
              How Much House Can I Afford?
            </a>{' '}
            before treating approval as a budget.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a 15-year mortgage always smarter?',
        answer:
          'No. It can save interest, but the higher payment can reduce flexibility and emergency savings.',
      },
      {
        question: 'Can I take a 30-year mortgage and pay extra?',
        answer:
          'Many borrowers can, but you should confirm prepayment rules with the lender and keep enough cash for reserves.',
      },
      {
        question: 'What if I move in five to seven years?',
        answer:
          'A shorter expected hold period can reduce the benefit of a 15-year term because you may not keep the loan long enough to realize the full interest savings.',
      },
      {
        question: 'Does a shorter term improve approval odds?',
        answer:
          'Not necessarily. The higher required monthly payment can increase debt-to-income pressure.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      {
        href: '/blog/how-mortgage-payments-are-calculated',
        label: 'How Mortgage Payments Are Calculated',
      },
      { href: '/blog/how-much-house-can-i-afford', label: 'How Much House Can I Afford?' },
    ],
    sources: [
      'Freddie Mac consumer guidance on loan terms',
      'Freddie Mac Primary Mortgage Market Survey',
      'CFPB mortgage payment materials',
    ],
  },
  {
    slug: 'what-is-an-amortization-schedule',
    cluster: 'Mortgage',
    title: 'What Is an Amortization Schedule?',
    description:
      'Learn what an amortization schedule shows, why early mortgage payments are interest-heavy, and how to use the table to compare payoff strategies.',
    video: {
      url: 'https://www.youtube.com/watch?v=M3sc-fY-1TE',
      embedUrl: 'https://www.youtube.com/embed/M3sc-fY-1TE',
      channel: 'Finance tutorials / real estate math',
    },
    intro: [
      'An amortization schedule is the payment-by-payment map of a loan. It shows each payment, how much goes to interest, how much reduces principal, and what balance remains afterward.',
      'For mortgage borrowers, the schedule makes one surprising fact visible: early payments are often mostly interest, even when the monthly payment never changes.',
    ],
    sections: [
      {
        heading: 'What the table shows',
        paragraphs: [
          'A basic amortization table includes the payment number, payment amount, interest portion, principal portion, and remaining balance.',
          'Escrowed taxes and insurance are usually not part of the amortization schedule because they do not reduce the loan balance.',
        ],
      },
      {
        heading: 'Why early payments are mostly interest',
        paragraphs: [
          'Interest is calculated on the current unpaid balance. At the start of a 30-year loan, the balance is close to the original loan amount, so the interest charge is high.',
          'As principal is paid down, the interest charge shrinks and more of each fixed payment reduces the balance.',
        ],
      },
      {
        heading: 'Sample amortization table',
        paragraphs: [
          'You do not need to read 360 rows to understand the pattern. A few checkpoints show how slowly principal can fall in the early years.',
        ],
        table: {
          headers: ['Payment #', 'Payment', 'Interest', 'Principal', 'Remaining balance'],
          rows: [
            ['1', '$2,023', '$1,733', '$290', '$319,710'],
            ['12', '$2,023', '$1,715', '$308', '$316,435'],
            ['60', '$2,023', '$1,603', '$420', '$299,433'],
            ['120', '$2,023', '$1,449', '$574', '$271,579'],
          ],
        },
      },
      {
        heading: 'How extra payments change the schedule',
        paragraphs: [
          'Extra principal payments reduce the balance earlier than scheduled. Because future interest is based on the balance, extra principal can also reduce total interest.',
          'The impact depends on timing. Extra payments made early generally save more interest than the same extra payments made near the end of the loan.',
        ],
      },
      {
        heading: 'Common mistakes when reading amortization',
        paragraphs: [
          'Do not confuse principal-and-interest with the total amount drafted from your bank account. Taxes, insurance, mortgage insurance, and HOA dues are separate planning items.',
          <>
            Also remember that an amortization table assumes the rate and payment terms entered are
            correct. Use the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            to test scenarios, then compare them with lender documents.
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            An amortization schedule turns mortgage math into a timeline. It pairs naturally with{' '}
            <a
              href="/blog/how-mortgage-payments-are-calculated"
              className="font-medium text-blue-600 underline"
            >
              how mortgage payments are calculated
            </a>{' '}
            because it shows what happens after the payment is set.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Does every mortgage have an amortization schedule?',
        answer:
          'Most fully amortizing mortgages do. The schedule may be provided by a lender or generated with a calculator.',
      },
      {
        question: 'Is escrow included in the schedule?',
        answer:
          'Usually no. Escrow is for taxes and insurance, while amortization tracks principal and interest on the loan.',
      },
      {
        question: 'Why might my lender statement differ slightly?',
        answer:
          'Rounding, payment timing, fees, escrow changes, and servicing details can create small differences.',
      },
      {
        question: 'What happens if I make one extra payment each year?',
        answer:
          'Extra principal can shorten the payoff timeline and reduce total interest, depending on your loan rules and timing.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      {
        href: '/blog/how-mortgage-payments-are-calculated',
        label: 'How Mortgage Payments Are Calculated',
      },
    ],
    sources: [
      'CFPB mortgage key terms',
      'Khan Academy amortization explainers',
      'CFPB mortgage payoff materials',
    ],
  },
  {
    slug: 'how-much-house-can-i-afford',
    cluster: 'Mortgage',
    title: 'How Much House Can I Afford?',
    description:
      'Estimate how much house you can afford using income, debt-to-income ratio, down payment, taxes, insurance, and a realistic monthly payment target.',
    video: {
      url: 'https://www.youtube.com/watch?v=RTyIAG8k_8Q',
      embedUrl: 'https://www.youtube.com/embed/RTyIAG8k_8Q',
      channel: 'Graham Stephan',
    },
    intro: [
      'The better way to answer "How much house can I afford?" is to start with a monthly payment you can carry comfortably, then work backward into a loan amount and purchase price.',
      'Listing prices are only the surface. Debt-to-income ratio, cash to close, taxes, insurance, mortgage insurance, HOA dues, repairs, and savings after closing all matter.',
    ],
    sections: [
      {
        heading: 'Start with payment, not price',
        paragraphs: [
          'A home price can look affordable until taxes, insurance, and mortgage insurance are added. A payment-first approach keeps the monthly budget in view.',
          'Choose a target payment that leaves room for food, transportation, childcare, repairs, retirement savings, and emergencies.',
        ],
      },
      {
        heading: 'The role of DTI',
        paragraphs: [
          'Debt-to-income ratio compares monthly debt payments with gross monthly income. Lenders use it to evaluate capacity, but the exact limit depends on loan program, credit profile, automated underwriting, and compensating factors.',
          'Your personal comfort ceiling may be lower than the approval ceiling. That is normal and worth respecting.',
        ],
        table: {
          headers: ['Item', 'Example'],
          rows: [
            ['Gross monthly income', '$8,500'],
            ['Other monthly debt', '$850'],
            ['Max total debt at 36% DTI', '$3,060'],
            ['Approx. available housing budget', '$2,210'],
            ['Est. taxes + insurance + PMI + HOA', '$560'],
            ['Est. principal + interest budget', '$1,650'],
          ],
        },
      },
      {
        heading: 'PITI and the hidden monthly costs',
        paragraphs: [
          'PITI means principal, interest, taxes, and insurance. Many buyers also need to account for mortgage insurance and HOA dues.',
          'Repairs are not always in the lender payment, but they are real. A comfortable purchase should leave money for maintenance after closing.',
        ],
      },
      {
        heading: 'How down payment changes affordability',
        paragraphs: [
          'A larger down payment can reduce the loan amount and may reduce or eliminate mortgage insurance. It can also lower the payment enough to change the price range.',
          <>
            Do not use every dollar for the down payment without checking cash to close. The{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>{' '}
            can help estimate the other cash needed.
          </>,
        ],
      },
      {
        heading: 'Why lender approval is not the same as comfort',
        paragraphs: [
          'A lender may approve a payment that technically fits underwriting guidelines. That does not mean the payment fits your life.',
          'Think about income volatility, upcoming expenses, local insurance risk, commuting costs, and how much savings you want left after closing.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            Use a price range as a planning estimate, not a trophy. A home that leaves breathing room
            is often stronger than a home that uses every approved dollar. Start with the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            and adjust until the full payment feels realistic.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'What DTI ratio do lenders want?',
        answer:
          'It varies by loan program and borrower profile. Lower DTI is generally stronger, but automated underwriting can allow higher ratios in some cases.',
      },
      {
        question: 'Should I include HOA fees?',
        answer:
          'Yes. HOA dues affect your monthly budget and may be considered in qualification.',
      },
      {
        question: 'Should I budget from gross income or take-home pay?',
        answer:
          'Lenders often use gross income, but your household budget should be tested against take-home pay.',
      },
      {
        question: 'Does a bigger down payment always help?',
        answer:
          'It can lower the payment, but keeping adequate reserves after closing can be just as important.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
    ],
    sources: ['CFPB debt-to-income explainer', 'Fannie Mae DTI guidance', 'HUD homebuying materials'],
  },
  {
    slug: 'fixed-vs-adjustable-rate-mortgages',
    cluster: 'Mortgage',
    title: 'Fixed vs Adjustable Rate Mortgages',
    description:
      'Compare fixed-rate and adjustable-rate mortgages, including payment stability, rate reset risk, introductory periods, and when an ARM may or may not fit.',
    video: {
      url: 'https://www.youtube.com/watch?v=OwU24LYKYEo',
      embedUrl: 'https://www.youtube.com/embed/OwU24LYKYEo',
      channel: 'NerdWallet',
    },
    intro: [
      'With a fixed-rate mortgage, the interest rate is set when the loan begins and does not change. With an adjustable-rate mortgage, the rate may change after an initial fixed period.',
      'That difference is more than technical. It is a budgeting choice between payment predictability and accepting future reset risk in exchange for possible introductory savings.',
    ],
    sections: [
      {
        heading: 'What changes and what stays the same',
        paragraphs: [
          'A fixed-rate mortgage keeps the interest rate stable for the loan term. The principal-and-interest payment stays the same, although taxes and insurance can still change.',
          'An ARM usually has an introductory fixed period, then adjusts based on the loan terms, an index, a margin, and rate caps.',
        ],
      },
      {
        heading: 'How ARMs are structured',
        paragraphs: [
          'A 5/1 ARM typically means the rate is fixed for five years and can adjust once per year after that. Other structures use different fixed periods and reset intervals.',
          'Caps can limit how much the rate changes at first adjustment, at later adjustments, and over the life of the loan. Caps reduce risk, but they do not eliminate payment uncertainty.',
        ],
        table: {
          headers: ['Feature', 'Fixed-rate', '5/1 ARM'],
          rows: [
            ['Initial rate stability', 'Full term', 'First 5 years'],
            ['Payment predictability', 'High', 'Lower after reset'],
            ['Typical starting rate', 'Often higher', 'Often lower'],
            ['Refinance/sell dependency', 'Lower', 'Higher'],
            ['Best fit', 'Long hold, stable budget', 'Shorter hold, clearer exit'],
          ],
        },
      },
      {
        heading: 'Why lower introductory rates can be tempting',
        paragraphs: [
          'If an ARM starts with a meaningfully lower rate, the early payment may be lower than a fixed-rate loan. That can help a buyer qualify or preserve monthly cash.',
          'The risk is that the lower payment may not last. If rates rise, refinancing is unavailable, or the buyer does not sell as planned, the later payment can become uncomfortable.',
        ],
      },
      {
        heading: 'Payment shock and budgeting risk',
        paragraphs: [
          'Payment shock happens when the adjusted payment rises more than the borrower expected. It can be especially stressful if the household already bought near its maximum budget.',
          'Before choosing an ARM, estimate the payment at the fully indexed rate and at the lifetime cap, not just the introductory payment.',
        ],
      },
      {
        heading: 'When an ARM may fit',
        paragraphs: [
          'An ARM may fit borrowers with a shorter expected hold period, strong reserves, and a realistic plan for selling, refinancing, or absorbing a higher payment.',
          <>
            A fixed-rate loan may fit better when you expect to keep the home for a long time or
            want the clearest budget. Compare both in the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            .
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            ARMs are not automatically bad, and fixed-rate loans are not automatically best. The
            question is whether the risk fits your timeline, cash reserves, and affordability plan.
            For broader budget context, read{' '}
            <a
              href="/blog/how-much-house-can-i-afford"
              className="font-medium text-blue-600 underline"
            >
              How Much House Can I Afford?
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'What does 5/1 ARM mean?',
        answer:
          'It generally means the rate is fixed for five years, then can adjust once per year after that.',
      },
      {
        question: 'Can an ARM payment go down?',
        answer:
          'Yes, if the index and terms allow it, but borrowers should plan for the possibility of increases.',
      },
      {
        question: 'Do caps fully protect me?',
        answer:
          'No. Caps limit rate changes, but the payment can still rise materially.',
      },
      {
        question: 'Should I rely on refinancing later?',
        answer:
          'Refinancing depends on rates, home value, credit, income, and market conditions, so it should not be the only plan.',
      },
    ],
    relatedLinks: [
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/how-much-house-can-i-afford', label: 'How Much House Can I Afford?' },
      {
        href: '/blog/how-mortgage-payments-are-calculated',
        label: 'How Mortgage Payments Are Calculated',
      },
    ],
    sources: ['CFPB ARM booklet', 'Ask CFPB fixed-rate versus ARM materials', 'Freddie Mac rate survey'],
  },
  {
    slug: 'what-are-closing-costs',
    cluster: 'Buyer Closing Costs',
    title: 'What Are Closing Costs?',
    description:
      'Learn what closing costs are, which fees are common, how Loan Estimates and Closing Disclosures work, and why cash to close is not the same as your down payment.',
    video: {
      url: 'https://www.youtube.com/watch?v=8CZJBnofPUU',
      embedUrl: 'https://www.youtube.com/embed/8CZJBnofPUU',
      channel: 'NerdWallet',
    },
    intro: [
      'Closing costs are the upfront costs tied to getting a mortgage and completing the transfer of ownership. They can include lender charges, title and settlement fees, government recording costs, prepaids, and escrow deposits.',
      'They are not the same as your down payment, and they are not always the same as cash to close.',
    ],
    sections: [
      {
        heading: 'The simplest definition',
        paragraphs: [
          'Closing costs are transaction costs paid at or before settlement. For buyers, they often include loan-related fees and ownership-transfer expenses.',
          'Some costs go to the lender, some go to third-party service providers, and some are prepaid amounts for items like insurance, interest, or taxes.',
        ],
      },
      {
        heading: 'Loan costs, prepaid items, and other fees',
        paragraphs: [
          'Loan costs may include origination charges, underwriting, discount points, appraisal, and credit report fees. Title and settlement costs may include title insurance, escrow or settlement charges, and recording.',
          'Prepaids are different because they fund expenses you are starting early, such as homeowners insurance, prepaid interest, and tax or insurance escrow deposits.',
        ],
        table: {
          headers: ['Category', 'Example fee'],
          rows: [
            ['Lender charges', 'Origination, underwriting, discount points'],
            ['Property-related', 'Appraisal, survey, inspection in some cases'],
            ['Title/settlement', 'Title insurance, settlement or escrow, recording'],
            ['Government', 'Transfer or recording fees where applicable'],
            ['Prepaids/escrows', 'Homeowners insurance, prepaid interest, taxes'],
          ],
        },
      },
      {
        heading: 'Loan Estimate versus Closing Disclosure',
        paragraphs: [
          'The Loan Estimate is an early disclosure that helps you compare loan offers. The Closing Disclosure comes later and shows final or near-final numbers before settlement.',
          'Comparing the two documents helps you see what changed, which fees are lender-controlled, and whether credits or adjustments were applied correctly.',
        ],
      },
      {
        heading: 'Why closing costs vary',
        paragraphs: [
          'Closing costs vary by purchase price, loan amount, lender, state, county, property taxes, insurance, loan type, title company, and negotiated credits.',
          <>
            Use the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>{' '}
            to organize estimates before comparing them with lender disclosures.
          </>,
        ],
      },
      {
        heading: 'Closing costs versus cash to close',
        paragraphs: [
          'Cash to close includes the down payment plus closing costs, then adjusts for earnest money already paid, lender credits, seller credits, prorations, and other settlement adjustments.',
          'This distinction matters because a buyer with enough down payment may still be short on total cash needed at settlement.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            Closing costs are easier to manage when you separate fee categories and compare
            documents. For the monthly side of the purchase, use the{' '}
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
        question: 'How much are closing costs usually?',
        answer:
          'Many buyers estimate a percentage of the purchase price, but actual costs vary by state, lender, loan type, taxes, insurance, and credits.',
      },
      {
        question: 'Can seller credits reduce what I bring?',
        answer:
          'Yes. Seller credits can reduce buyer cash due, subject to contract terms and loan-program limits.',
      },
      {
        question: 'Are inspections part of closing costs?',
        answer:
          'Sometimes they are paid before closing rather than on the settlement statement, but they still affect cash planning.',
      },
      {
        question: 'Can I finance closing costs?',
        answer:
          'Some loan programs or lender credits may reduce upfront cash, but financing costs can affect rate, loan amount, or long-term cost.',
      },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
    ],
    sources: ['CFPB Loan Estimate materials', 'CFPB Closing Disclosure materials', 'HUD housing counselor materials'],
  },
  {
    slug: 'how-much-cash-do-i-need-to-buy-a-house',
    cluster: 'Buyer Closing Costs',
    title: 'How Much Cash Do I Need to Buy a House?',
    description:
      'Estimate the real cash you need to buy a house, including down payment, closing costs, prepaid items, earnest money, and reserves after closing.',
    video: {
      url: 'https://www.youtube.com/watch?v=0QCx_i2oxLM',
      embedUrl: 'https://www.youtube.com/embed/0QCx_i2oxLM',
      channel: 'First-time buyer explainer',
    },
    intro: [
      'The cash needed to buy a house is usually more than the down payment. Buyers also need to plan for closing costs, prepaid items, escrow deposits, inspections, moving costs, and reserves after closing.',
      'A useful estimate separates money due at closing from money you should still have after closing.',
    ],
    sections: [
      {
        heading: 'Down payment is only one piece',
        paragraphs: [
          'The down payment reduces the purchase price into the loan amount. It may be 3%, 3.5%, 5%, 10%, 20%, or another amount depending on loan program and borrower choice.',
          'A larger down payment can reduce monthly payment and mortgage insurance, but it should not wipe out emergency savings.',
        ],
      },
      {
        heading: 'Closing costs and prepaids',
        paragraphs: [
          'Closing costs include lender and settlement costs. Prepaids and escrow deposits cover items like insurance, prepaid interest, and property taxes.',
          'Both affect cash to close, but they are not all the same type of expense.',
        ],
        table: {
          headers: ['Cash item', 'Example amount'],
          rows: [
            ['Purchase price', '$400,000'],
            ['Down payment at 5%', '$20,000'],
            ['Estimated closing costs', '$10,000'],
            ['Prepaids and escrow setup', '$4,000'],
            ['Earnest money already paid', '-$5,000'],
            ['Estimated cash to close', '$29,000'],
            ['Suggested post-closing reserves', 'separate from cash to close'],
          ],
        },
      },
      {
        heading: 'Earnest money and credits',
        paragraphs: [
          'Earnest money is often paid after the contract is accepted. If credited at closing, it reduces the remaining amount you bring to settlement.',
          'Seller credits or lender credits can also reduce cash due, but they may have limits and tradeoffs.',
        ],
      },
      {
        heading: 'Reserves after closing',
        paragraphs: [
          'Reserves are the savings left after the purchase. They help cover repairs, job disruption, insurance deductibles, furniture, and ordinary life surprises.',
          'A buyer who can technically close but has no cushion may be taking more risk than the purchase price suggests.',
        ],
      },
      {
        heading: 'A practical cash planning workflow',
        paragraphs: [
          <>
            Estimate the monthly payment with the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>
            , then estimate settlement cash with the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>
            .
          </>,
          'Finally, subtract the total from available savings and decide whether the remaining reserve feels strong enough.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            The safest question is not just "Can I close?" It is "Can I close and still live
            comfortably afterward?" For fee categories, read{' '}
            <a href="/blog/what-are-closing-costs" className="font-medium text-blue-600 underline">
              What Are Closing Costs?
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is cash to close the same as closing costs?',
        answer:
          'No. Cash to close includes down payment, closing costs, prepaids, credits, deposits, and adjustments.',
      },
      {
        question: 'Do I need reserves?',
        answer:
          'Even when not required, reserves are useful because homeownership can create immediate repair and cash-flow needs.',
      },
      {
        question: 'Can seller credits cover everything?',
        answer:
          'Usually no. Credits may be limited by contract, loan rules, and actual allowable costs.',
      },
      {
        question: 'Should I count moving costs?',
        answer:
          'Yes. Moving, utility deposits, furniture, and repairs are not always on the settlement statement but still use cash.',
      },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/blog/what-are-closing-costs', label: 'What Are Closing Costs?' },
    ],
    sources: ['CFPB Loan Estimate materials', 'HUD homebuying resources', 'Major consumer finance closing cost guides'],
  },
  {
    slug: 'closing-costs-by-state',
    cluster: 'Buyer Closing Costs',
    title: 'Closing Costs by State',
    description:
      'An overview of how buyer closing costs vary by state, why transfer taxes and local fees matter, and how to estimate your own cash to close.',
    video: {
      url: 'https://www.youtube.com/watch?v=vHsj1SxfhdY',
      embedUrl: 'https://www.youtube.com/embed/vHsj1SxfhdY',
      channel: 'Audra Lambert / general explainer',
    },
    intro: [
      'Closing costs vary by state because transfer taxes, recording fees, title customs, attorney practices, property taxes, and insurance markets are local.',
      'A state table can orient you, but your final number still depends on the property, loan, contract, and settlement statement.',
    ],
    sections: [
      {
        heading: 'Why state matters',
        paragraphs: [
          'Some states or local governments have higher transfer taxes or recording costs. Some areas commonly use attorneys. Title insurance customs also vary.',
          'Insurance and property tax patterns can change prepaids and escrow deposits even when lender fees are similar.',
        ],
      },
      {
        heading: 'Representative state table',
        paragraphs: [
          'Use this as a planning orientation, not a quote. Local county and contract details can change the final result.',
        ],
        table: {
          headers: ['State', 'High-level buyer-cost consideration'],
          rows: [
            ['Delaware', 'Often high in state-average closing cost comparisons'],
            ['New York', 'Transfer and mansion-tax issues can matter by location and price'],
            ['Florida', 'Documentary stamp and title customs can matter'],
            ['Texas', 'Title premiums and tax escrows can be meaningful'],
            ['California', 'County and city transfer taxes vary widely'],
            ['Pennsylvania', 'Transfer taxes can be a significant line item'],
          ],
        },
      },
      {
        heading: 'Transfer taxes and recording fees',
        paragraphs: [
          'Transfer taxes and recording fees are government charges tied to recording or transferring ownership. They can be state, county, city, or local charges.',
          'Who pays can depend on local custom and the purchase contract, so the buyer should not assume state averages settle the question.',
        ],
      },
      {
        heading: 'Attorney, escrow, and title customs',
        paragraphs: [
          'Some states commonly involve attorneys in residential closings. Others rely more heavily on title or escrow companies.',
          'Owner title insurance and lender title insurance customs also vary. The contract and local practice determine which costs appear on the buyer side.',
        ],
      },
      {
        heading: 'How to estimate your own state costs',
        paragraphs: [
          <>
            Start with the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>
            , then compare the estimate with your Loan Estimate and title company fee sheet.
          </>,
          'Ask which numbers are lender fees, which are third-party fees, which are government charges, and which are prepaid or escrow items.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            "By state" averages are helpful for early planning, but settlement is local. For the
            core fee categories, read{' '}
            <a href="/blog/what-are-closing-costs" className="font-medium text-blue-600 underline">
              What Are Closing Costs?
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Which state has the highest closing costs?',
        answer:
          'Rankings change by methodology and year. High-cost states often stand out because of transfer taxes, local taxes, title costs, or insurance-related escrow needs.',
      },
      {
        question: 'Are closing costs based on state or county?',
        answer:
          'Both can matter. County and city charges can be important even within the same state.',
      },
      {
        question: 'Can seller credits offset state costs?',
        answer:
          'Often yes, but credits depend on negotiation and loan-program limits.',
      },
      {
        question: 'Should I trust online averages?',
        answer:
          'Use them for orientation, then rely on lender and settlement disclosures for the actual transaction.',
      },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/blog/what-are-closing-costs', label: 'What Are Closing Costs?' },
    ],
    sources: ['CFPB closing disclosure resources', 'State title and settlement customs resources', 'Bankrate and NerdWallet state closing cost overviews'],
  },
  {
    slug: 'fha-closing-costs-explained',
    cluster: 'Buyer Closing Costs',
    title: 'FHA Closing Costs Explained',
    description:
      'Learn what makes FHA closing costs different, including upfront mortgage insurance premium, seller concessions, and how FHA cash-to-close estimates work.',
    video: {
      url: 'https://www.youtube.com/watch?v=6bCo1XXHENg',
      embedUrl: 'https://www.youtube.com/embed/6bCo1XXHENg',
      channel: 'FHA-specific explainer',
    },
    intro: [
      'FHA loans can help buyers purchase with a smaller down payment, but the cash-to-close picture has its own moving parts. The biggest FHA-specific item is the upfront mortgage insurance premium, often called UFMIP.',
      'FHA buyers should estimate down payment, ordinary closing costs, prepaids, escrow setup, UFMIP treatment, and any seller concessions together.',
    ],
    sections: [
      {
        heading: 'What makes FHA different',
        paragraphs: [
          'FHA loans are insured by the Federal Housing Administration and are commonly used by first-time buyers and buyers with smaller down payments.',
          'The lower down payment can help cash planning, but mortgage insurance is a core part of the loan structure.',
        ],
      },
      {
        heading: 'Upfront MIP and monthly MIP',
        paragraphs: [
          'FHA loans generally include an upfront mortgage insurance premium and an annual mortgage insurance premium paid monthly.',
          'The upfront premium may be financed into the loan in many situations, but it still affects the loan balance and long-term cost.',
        ],
        table: {
          headers: ['FHA cash item', 'Planning note'],
          rows: [
            ['Minimum down payment', 'Often 3.5% for qualifying borrowers'],
            ['Upfront MIP', 'May be financed or paid upfront depending on scenario'],
            ['Monthly MIP', 'Included in ongoing housing payment'],
            ['Seller concessions', 'Can help with allowable costs within FHA limits'],
            ['Prepaids and escrow', 'Insurance, taxes, and prepaid interest still matter'],
          ],
        },
      },
      {
        heading: 'Seller concessions and limits',
        paragraphs: [
          'Seller concessions can reduce a buyer\'s cash due at closing, but they must fit FHA rules and the actual allowable costs.',
          'A large credit is not useful if it exceeds permitted limits or cannot be applied to eligible charges.',
        ],
      },
      {
        heading: 'FHA cash to close versus loan cost',
        paragraphs: [
          'Cash to close can be lower than a conventional scenario when the down payment is smaller and credits apply. But monthly cost may be higher if mortgage insurance is significant.',
          <>
            Compare both upfront cash and payment using the{' '}
            <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
              Mortgage Calculator
            </a>{' '}
            and{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>
            .
          </>,
        ],
      },
      {
        heading: 'Questions to ask before choosing FHA',
        paragraphs: [
          'Ask the lender how UFMIP is being handled, what monthly MIP will be, how long mortgage insurance may last, and whether seller credits are being applied correctly.',
          'Also compare FHA with conventional options if you qualify, because the better choice depends on credit, down payment, rate, mortgage insurance, and timeline.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          'FHA can be a practical path into homeownership, but the closing-cost estimate should include both FHA-specific insurance and ordinary settlement costs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is UFMIP the same as closing costs?',
        answer:
          'It is an FHA-specific loan cost. It may be financed in many cases, but it should still be included in total cost planning.',
      },
      {
        question: 'Can a seller pay FHA closing costs?',
        answer:
          'Seller concessions can help with allowable costs, subject to FHA rules and contract terms.',
      },
      {
        question: 'Does FHA always require 3.5% down?',
        answer:
          'Many qualifying borrowers use 3.5% down, but requirements depend on borrower profile and program rules.',
      },
      {
        question: 'Should I compare FHA and conventional loans?',
        answer:
          'Yes. Compare both upfront cash and monthly payment before choosing.',
      },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
    ],
    sources: ['HUD/FHA mortgage insurance materials', 'HUD homebuying resources', 'CFPB Loan Estimate materials'],
  },
  {
    slug: 'who-pays-closing-costs',
    cluster: 'Buyer Closing Costs',
    title: 'Who Pays Closing Costs?',
    description:
      'Learn which closing costs buyers usually pay, which costs sellers may pay, how seller credits work, and why the contract matters more than rules of thumb.',
    video: {
      url: 'https://www.youtube.com/watch?v=pI5k4vCEw9c',
      embedUrl: 'https://www.youtube.com/embed/pI5k4vCEw9c',
      channel: 'Real Estate Talk',
    },
    intro: [
      'Buyers and sellers both can have closing costs. Which side pays a particular item depends on law, local custom, loan rules, and most importantly the purchase contract.',
      'That is why the best answer is not a universal rule. It is a line-by-line review of the settlement statement.',
    ],
    sections: [
      {
        heading: 'Typical buyer costs',
        paragraphs: [
          'Buyers often pay lender charges, appraisal, credit report, lender title policy, prepaid interest, homeowners insurance, tax and insurance escrow deposits, and some recording fees.',
          'The exact mix depends on loan type, state, lender, and local settlement practice.',
        ],
      },
      {
        heading: 'Typical seller costs',
        paragraphs: [
          'Sellers often pay commission, mortgage payoff, negotiated credits, transfer taxes in some markets, title charges in some areas, HOA transfer items, and prorated property taxes.',
          'Seller costs reduce net proceeds, which is why they belong in a seller net estimate.',
        ],
        table: {
          headers: ['Cost type', 'Often paid by', 'Can negotiation change it?'],
          rows: [
            ['Loan origination', 'Buyer', 'Usually lender/borrower specific'],
            ['Appraisal', 'Buyer', 'Sometimes through credits'],
            ['Owner title policy', 'Varies by location', 'Yes'],
            ['Transfer taxes', 'Varies by state and contract', 'Sometimes'],
            ['Commission', 'Seller or negotiated arrangement', 'Yes'],
            ['Seller credit', 'Seller', 'Yes'],
          ],
        },
      },
      {
        heading: 'How seller credits work',
        paragraphs: [
          'A seller credit is a negotiated amount the seller contributes toward the buyer\'s allowable costs. It can reduce the buyer\'s cash to close.',
          'Credits must fit loan-program rules and actual eligible costs. A credit that cannot be used may not help the buyer.',
        ],
      },
      {
        heading: 'Why the contract matters most',
        paragraphs: [
          'Local custom can guide expectations, but the signed contract determines many closing-cost responsibilities.',
          'Buyers and sellers should review the contract, Loan Estimate, Closing Disclosure, and settlement statement instead of relying only on rules of thumb.',
        ],
      },
      {
        heading: 'How calculators help both sides',
        paragraphs: [
          <>
            Buyers can estimate cash due with the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>
            . Sellers can estimate proceeds with the{' '}
            <a
              href="/seller-net-proceeds-calculator"
              className="font-medium text-blue-600 underline"
            >
              Seller Net Proceeds Calculator
            </a>
            .
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          'Closing-cost responsibility is a negotiation and disclosure question. Treat every estimate as preliminary until the settlement statement confirms the final allocation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can buyers ask sellers to pay closing costs?',
        answer:
          'Yes. Buyers can negotiate seller credits, subject to seller agreement and loan-program limits.',
      },
      {
        question: 'Do sellers always pay commissions?',
        answer:
          'Commission arrangements are negotiable and should be reviewed in the listing agreement and purchase contract.',
      },
      {
        question: 'Who pays transfer taxes?',
        answer:
          'It varies by state, local custom, and contract terms.',
      },
      {
        question: 'Can closing costs change before settlement?',
        answer:
          'Yes. Some costs can change based on final loan terms, prepaid dates, prorations, and settlement adjustments.',
      },
    ],
    relatedLinks: [
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
    ],
    sources: ['CFPB Loan Estimate and Closing Disclosure materials', 'NAR settlement and contract resources', 'State title customs resources'],
  },
  {
    slug: 'seller-net-sheet-explained',
    cluster: 'Seller Net Proceeds',
    title: 'Seller Net Sheet Explained',
    description:
      'Learn what a seller net sheet is, what costs it estimates, and how it helps you estimate net proceeds before you list your home.',
    video: {
      url: 'https://www.youtube.com/watch?v=eISvAiBdxpg',
      embedUrl: 'https://www.youtube.com/embed/eISvAiBdxpg',
      channel: 'Real estate tech tutorial',
    },
    intro: [
      'A seller net sheet estimates how much money a homeowner may receive after selling costs, mortgage payoff, taxes, credits, and other deductions.',
      'It is not a guarantee. It is a planning worksheet that helps sellers compare sale prices, offers, and cost assumptions.',
    ],
    sections: [
      {
        heading: 'What a seller net sheet includes',
        paragraphs: [
          'A net sheet usually starts with expected sale price and subtracts mortgage payoff, real estate compensation, transfer taxes, title or escrow charges, seller credits, prorations, HOA fees, and other costs.',
          'The result is estimated net proceeds before any taxes or financial planning outside the closing statement.',
        ],
      },
      {
        heading: 'Sale price is not take-home money',
        paragraphs: [
          'A $450,000 sale does not mean the seller receives $450,000. Existing loans, selling costs, and contract concessions are paid before proceeds are released.',
          'This is the core value of a net sheet: it separates headline price from usable proceeds.',
        ],
        table: {
          headers: ['Line item', 'Example'],
          rows: [
            ['Estimated sale price', '$450,000'],
            ['Mortgage payoff', '-$275,000'],
            ['Commission/compensation', '-$24,750'],
            ['Transfer/title/settlement costs', '-$4,500'],
            ['Seller credit to buyer', '-$6,000'],
            ['Estimated net proceeds', '$139,750'],
          ],
        },
      },
      {
        heading: 'Why different offers can net differently',
        paragraphs: [
          'The highest price is not always the highest net. A lower offer with fewer concessions can sometimes leave the seller with similar or better proceeds.',
          'A net sheet helps compare price, credits, repair requests, closing date prorations, and compensation assumptions side by side.',
        ],
      },
      {
        heading: 'Mortgage payoff and prorations',
        paragraphs: [
          'The mortgage payoff is not always the same as the last statement balance because interest accrues until payoff. Taxes, HOA dues, rent, or other items may also be prorated at closing.',
          'Sellers should request payoff information and review final settlement figures carefully.',
        ],
      },
      {
        heading: 'How to use a seller proceeds calculator',
        paragraphs: [
          <>
            The{' '}
            <a
              href="/seller-net-proceeds-calculator"
              className="font-medium text-blue-600 underline"
            >
              Seller Net Proceeds Calculator
            </a>{' '}
            lets you adjust sale price, payoff, commission, closing costs, and credits quickly.
          </>,
          <>
            If you are buying again, pair the estimate with the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>{' '}
            to see how proceeds may support the next purchase.
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          'A seller net sheet is most useful before decisions are locked in. It turns a possible sale into a set of assumptions you can question, compare, and update.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a seller net sheet legally binding?',
        answer:
          'No. It is an estimate. Final proceeds depend on the closing statement and actual transaction terms.',
      },
      {
        question: 'Does a net sheet include taxes on profit?',
        answer:
          'Usually it focuses on closing proceeds, not income-tax consequences. Ask a tax professional about tax treatment.',
      },
      {
        question: 'Why is mortgage payoff different from my balance?',
        answer:
          'Payoff can include interest through the payoff date and other loan-servicing adjustments.',
      },
      {
        question: 'Can seller credits reduce proceeds?',
        answer:
          'Yes. A credit to the buyer is typically subtracted from seller proceeds.',
      },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
    ],
    sources: ['NAR seller resources', 'Title and settlement net sheet examples', 'Major consumer seller cost guides'],
  },
  {
    slug: 'how-much-does-it-cost-to-sell-a-house',
    cluster: 'Seller Net Proceeds',
    title: 'How Much Does It Cost to Sell a House?',
    description:
      'Estimate what it costs to sell a house, including commissions, transfer taxes, title fees, concessions, and mortgage payoff effects on your net proceeds.',
    video: {
      url: 'https://www.youtube.com/watch?v=v4-HfSSE1ms',
      embedUrl: 'https://www.youtube.com/embed/v4-HfSSE1ms',
      channel: 'Seller closing-cost explainer',
    },
    intro: [
      'Selling a house can involve commission, mortgage payoff, transfer taxes, title or escrow charges, attorney fees, seller concessions, repairs, HOA fees, and prorated taxes.',
      'The cost to sell is best understood as the difference between sale price and estimated net proceeds.',
    ],
    sections: [
      {
        heading: 'The biggest seller cost categories',
        paragraphs: [
          'Real estate compensation is often one of the largest seller-side costs, but it is not the only one. Transfer taxes, title fees, settlement fees, credits, repairs, and prorations can also matter.',
          'Local custom and contract terms determine which costs land on the seller side.',
        ],
      },
      {
        heading: 'Example seller cost breakdown',
        paragraphs: [
          'This example shows why sellers should estimate proceeds instead of focusing only on sale price.',
        ],
        table: {
          headers: ['Line item', 'Example'],
          rows: [
            ['Sale price', '$500,000'],
            ['Mortgage payoff', '-$310,000'],
            ['Commission/compensation', '-$27,500'],
            ['Transfer/title/settlement', '-$6,000'],
            ['Repairs or buyer credit', '-$7,500'],
            ['Estimated proceeds', '$149,000'],
          ],
        },
      },
      {
        heading: 'Commissions and negotiated compensation',
        paragraphs: [
          <>
            Commission is negotiable and can materially affect proceeds. Read{' '}
            <a
              href="/blog/realtor-commissions-explained"
              className="font-medium text-blue-600 underline"
            >
              Realtor Commissions Explained
            </a>{' '}
            for a deeper look at compensation structures.
          </>,
          'Even a one percentage point change on a high-value property can move proceeds by thousands of dollars.',
        ],
      },
      {
        heading: 'Repairs, credits, and concessions',
        paragraphs: [
          'A seller may agree to repair items, credit the buyer at closing, pay certain buyer costs, or reduce price after inspection.',
          'These concessions can make a deal work, but they reduce the seller net just like any other cost.',
        ],
      },
      {
        heading: 'How to estimate before listing',
        paragraphs: [
          <>
            Use the{' '}
            <a
              href="/seller-net-proceeds-calculator"
              className="font-medium text-blue-600 underline"
            >
              Seller Net Proceeds Calculator
            </a>{' '}
            with conservative assumptions. Then update the estimate after you receive a listing
            agreement, payoff quote, and actual offer terms.
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            The cost to sell is not one fee. It is a stack of deductions. A{' '}
            <a
              href="/blog/seller-net-sheet-explained"
              className="font-medium text-blue-600 underline"
            >
              seller net sheet
            </a>{' '}
            helps keep the stack visible.
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'What is usually the largest cost to sell?',
        answer:
          'Real estate compensation is often one of the largest, but mortgage payoff is usually the largest deduction from sale price when a loan remains.',
      },
      {
        question: 'Do sellers pay closing costs?',
        answer:
          'Yes, sellers commonly have their own closing costs, though the exact items vary by market and contract.',
      },
      {
        question: 'Are repairs included?',
        answer:
          'Repairs or buyer credits should be included if they are expected or negotiated.',
      },
      {
        question: 'Does sale price equal proceeds?',
        answer:
          'No. Proceeds are what remains after payoff, selling costs, credits, and adjustments.',
      },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/seller-net-sheet-explained', label: 'Seller Net Sheet Explained' },
    ],
    sources: ['Realtor.com seller closing cost materials', 'Zillow seller cost materials', 'NAR transfer tax and compensation resources'],
  },
  {
    slug: 'realtor-commissions-explained',
    cluster: 'Seller Net Proceeds',
    title: 'Realtor Commissions Explained',
    description:
      'Understand how real estate agent commissions work, why they are negotiable, how compensation changed after the NAR settlement, and how commission affects seller net proceeds.',
    video: {
      url: 'https://www.youtube.com/watch?v=c0V27xx6Ozs',
      embedUrl: 'https://www.youtube.com/embed/c0V27xx6Ozs',
      channel: '2025 commission rules explainer',
    },
    intro: [
      'Real estate commissions are compensation paid for brokerage services. They are negotiable, not set by law, and not fixed by any national association.',
      'For sellers, commission assumptions can materially change estimated net proceeds. For buyers, compensation terms can affect contract strategy and cash planning.',
    ],
    sections: [
      {
        heading: 'The basic commission model',
        paragraphs: [
          'A listing agreement usually defines how the listing broker is paid. Buyer-broker compensation may be handled separately, negotiated in the offer, or addressed through other contract terms.',
          'The important planning point is simple: compensation is a transaction cost and should be reviewed before signing.',
        ],
      },
      {
        heading: 'Why commissions are negotiable',
        paragraphs: [
          'Commission is a business term between client and broker. Sellers can ask what services are included, how compensation is structured, and what alternatives exist.',
          'Buyers should also understand their representation agreement and what happens if the seller does not offer compensation.',
        ],
      },
      {
        heading: 'What changed after the NAR settlement',
        paragraphs: [
          'Industry practice changed around how buyer-agent compensation is displayed and documented. Buyers and sellers should expect more explicit conversations about who is paying whom and under what agreement.',
          'The practical result is not that commissions disappeared. It is that compensation should be clearer and negotiated more deliberately.',
        ],
        table: {
          headers: ['Scenario', 'Sale price', 'Total compensation', 'Est. impact on seller proceeds'],
          rows: [
            ['Traditional higher comp', '$450,000', '$27,000', 'Largest reduction'],
            ['Mid-range negotiated', '$450,000', '$22,500', 'Moderate reduction'],
            ['Lower fee / alternate model', '$450,000', '$18,000', 'Smaller reduction'],
          ],
        },
      },
      {
        heading: 'How commission affects seller proceeds',
        paragraphs: [
          <>
            Entering different compensation assumptions in the{' '}
            <a
              href="/seller-net-proceeds-calculator"
              className="font-medium text-blue-600 underline"
            >
              Seller Net Proceeds Calculator
            </a>{' '}
            can show how sensitive proceeds are to the commission line.
          </>,
          'This is especially useful when comparing listing options, offer terms, or buyer-credit requests.',
        ],
      },
      {
        heading: 'Questions to ask before signing',
        paragraphs: [
          'Ask what services are included, whether compensation is percentage-based or flat, how buyer-agent compensation will be handled, what cancellation terms apply, and how offers with different compensation requests will be presented.',
          'Clear questions upfront prevent surprises on the net sheet later.',
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            Commission deserves a transparent conversation because it can be one of the largest
            selling costs. For the broader cost picture, read{' '}
            <a
              href="/blog/how-much-does-it-cost-to-sell-a-house"
              className="font-medium text-blue-600 underline"
            >
              How Much Does It Cost to Sell a House?
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Are real estate commissions fixed?',
        answer:
          'No. Commissions are negotiable and should be discussed before signing an agreement.',
      },
      {
        question: 'Who pays the buyer agent?',
        answer:
          'It depends on the buyer agreement, offer, seller terms, and contract. The arrangement should be written clearly.',
      },
      {
        question: 'Can a seller offer a buyer credit instead?',
        answer:
          'Possibly, subject to contract terms, loan-program rules, and negotiation.',
      },
      {
        question: 'Should I choose the lowest commission?',
        answer:
          'Not automatically. Compare services, pricing strategy, experience, and net outcome, not just the fee.',
      },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/how-much-does-it-cost-to-sell-a-house', label: 'How Much Does It Cost to Sell a House?' },
    ],
    sources: ['NAR compensation and settlement FAQ materials', 'Realtor.com commission explainers', 'NAR consumer compensation resources'],
  },
  {
    slug: 'seller-closing-costs-by-state',
    cluster: 'Seller Net Proceeds',
    title: 'Seller Closing Costs by State',
    description:
      'A practical overview of how seller closing costs vary by state, including transfer taxes, title customs, concessions, and why your contract still matters most.',
    video: {
      url: 'https://www.youtube.com/watch?v=69_E6oM3-AU',
      embedUrl: 'https://www.youtube.com/embed/69_E6oM3-AU',
      channel: '2026 home selling costs explainer',
    },
    intro: [
      'Seller closing costs vary by state because transfer taxes, title customs, attorney practices, escrow fees, HOA transfer charges, and local contract norms vary.',
      'Use state information for orientation, then use transaction-specific estimates for decisions.',
    ],
    sections: [
      {
        heading: 'Why seller costs vary by state',
        paragraphs: [
          'Some states and municipalities charge meaningful transfer taxes. Some markets commonly assign owner title policy costs to sellers, while others do not.',
          'Attorney involvement, escrow practice, and recording customs also change the settlement statement.',
        ],
      },
      {
        heading: 'Representative seller state table',
        paragraphs: [
          'This table is a starting point, not a settlement quote. County, city, and contract details can matter as much as the state name.',
        ],
        table: {
          headers: ['State', 'High-level seller-cost consideration'],
          rows: [
            ['Georgia', 'Seller commonly pays state transfer tax; contract terms still matter'],
            ['New York', 'Transfer and recording costs can be heavier'],
            ['California', 'County customs and escrow/title practices matter a lot'],
            ['Texas', 'State-custom variations and title fees matter'],
            ['Tennessee', 'Transfer tax plus common seller-side costs can add up'],
            ['Delaware', 'Closing-cost burden is often high in state-average comparisons'],
          ],
        },
      },
      {
        heading: 'Transfer taxes, title customs, and attorney states',
        paragraphs: [
          'Transfer tax responsibility can be set by state law, local custom, or contract. Title insurance customs can also differ widely.',
          'In attorney states, legal fees may appear as a normal part of the seller\'s closing process.',
        ],
      },
      {
        heading: 'How concessions change the final number',
        paragraphs: [
          'A seller credit, repair credit, or negotiated buyer-cost contribution can matter more than a state average.',
          'Offer comparison should include price and concessions together because both affect seller net.',
        ],
      },
      {
        heading: 'Why seller calculators beat average tables',
        paragraphs: [
          <>
            State averages cannot know your payoff, commission, offer terms, credits, or local taxes.
            The{' '}
            <a
              href="/seller-net-proceeds-calculator"
              className="font-medium text-blue-600 underline"
            >
              Seller Net Proceeds Calculator
            </a>{' '}
            lets you enter those details directly.
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          <>
            State guides help you ask better questions, but the contract and settlement statement
            decide the result. For a broader seller-cost overview, read{' '}
            <a
              href="/blog/how-much-does-it-cost-to-sell-a-house"
              className="font-medium text-blue-600 underline"
            >
              How Much Does It Cost to Sell a House?
            </a>
            .
          </>,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do all sellers pay transfer taxes?',
        answer:
          'No. Transfer tax responsibility varies by state, locality, and contract.',
      },
      {
        question: 'Are seller closing costs higher in some states?',
        answer:
          'Yes. State and local taxes, customs, and fees can make some markets more expensive for sellers.',
      },
      {
        question: 'Can buyers pay some seller costs?',
        answer:
          'Some responsibilities can be negotiated, but local law and contract terms matter.',
      },
      {
        question: 'Are commissions included in state closing cost averages?',
        answer:
          'Some averages include commission and some do not, so always check methodology.',
      },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/blog/how-much-does-it-cost-to-sell-a-house', label: 'How Much Does It Cost to Sell a House?' },
    ],
    sources: ['FNTIC laws and customs by state', 'NAR transfer tax materials', 'Realtor.com and Zillow seller cost overviews'],
  },
  {
    slug: 'how-much-equity-do-i-need-to-sell',
    cluster: 'Seller Net Proceeds',
    title: 'How Much Equity Do I Need to Sell?',
    description:
      'Estimate how much equity you may need to sell your home without surprises by comparing home value, mortgage payoff, selling costs, and target net proceeds.',
    video: {
      url: 'https://www.youtube.com/watch?v=P2V1TqqNhcY',
      embedUrl: 'https://www.youtube.com/embed/P2V1TqqNhcY',
      channel: 'Equity explainer',
    },
    intro: [
      'There is no single required equity percentage to sell a home. The real question is whether your estimated sale price can cover mortgage payoff, selling costs, credits, and the cash you want left over.',
      'Positive equity is helpful, but usable proceeds are what matter for your next move.',
    ],
    sections: [
      {
        heading: 'Equity versus usable proceeds',
        paragraphs: [
          'Home equity is the home value minus what you owe. Usable proceeds are what remains after selling costs and settlement deductions.',
          'A seller can have positive equity but still have less cash than expected after commission, credits, taxes, title fees, and payoff adjustments.',
        ],
      },
      {
        heading: 'The formula that matters',
        paragraphs: [
          'Start with estimated sale price. Subtract mortgage payoff, selling costs, negotiated credits, prorations, and any other required deductions. The result is estimated net proceeds.',
          'Then compare proceeds with the amount you need for your next purchase, move, debt payoff, or savings goal.',
        ],
        table: {
          headers: ['Scenario', 'Home value', 'Mortgage payoff', 'Gross equity', 'Est. selling costs', 'Est. proceeds'],
          rows: [
            ['Comfortable margin', '$425,000', '$260,000', '$165,000', '$32,000', '$133,000'],
            ['Thin margin', '$425,000', '$360,000', '$65,000', '$32,000', '$33,000'],
            ['Very thin margin', '$425,000', '$395,000', '$30,000', '$32,000', 'negative'],
          ],
        },
      },
      {
        heading: 'Why selling costs change the answer',
        paragraphs: [
          'Selling costs can absorb a meaningful share of equity. Commission, transfer taxes, title fees, repairs, concessions, and prorations all reduce proceeds.',
          'That is why a simple value-minus-mortgage calculation can feel too optimistic.',
        ],
      },
      {
        heading: 'Low-equity and negative-equity situations',
        paragraphs: [
          'If estimated proceeds are thin or negative, pause before listing. You may need cash to close, a lender-approved short sale, more time to build equity, or a different strategy.',
          'A real estate professional, lender, attorney, or housing counselor may be important when equity is tight.',
        ],
      },
      {
        heading: 'When the seller calculator helps most',
        paragraphs: [
          <>
            The{' '}
            <a
              href="/seller-net-proceeds-calculator"
              className="font-medium text-blue-600 underline"
            >
              Seller Net Proceeds Calculator
            </a>{' '}
            is most useful when you test several sale prices, payoff amounts, and cost assumptions.
          </>,
          <>
            If the sale is meant to fund a new purchase, compare proceeds with expected cash needed
            in the{' '}
            <a
              href="/buyer-closing-cost-calculator"
              className="font-medium text-blue-600 underline"
            >
              Buyer Closing Cost Calculator
            </a>
            .
          </>,
        ],
      },
      {
        heading: 'Final thoughts',
        paragraphs: [
          'Instead of chasing a universal equity rule, calculate the margin you need. Enough equity means enough to clear payoff, cover selling costs, and leave the proceeds your plan requires.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell with very little equity?',
        answer:
          'Possibly, but selling costs may leave little or no proceeds. Estimate carefully before listing.',
      },
      {
        question: 'What if I owe more than the home is worth?',
        answer:
          'That may require bringing cash to closing, waiting, negotiating with the lender, or exploring other options with qualified professionals.',
      },
      {
        question: 'Does equity include selling costs?',
        answer:
          'No. Equity is value minus debt. Proceeds account for selling costs and deductions.',
      },
      {
        question: 'How much should I leave for my next move?',
        answer:
          'That depends on your next purchase, moving costs, reserves, and personal budget.',
      },
    ],
    relatedLinks: [
      { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds Calculator' },
      { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Cost Calculator' },
    ],
    sources: ['CFPB equity definition materials', 'Bankrate and Bank of America equity explainers', 'Zillow and NerdWallet seller proceeds materials'],
  },
];

export const contentExpansionArticleMap = Object.fromEntries(
  contentExpansionArticles.map((article) => [article.slug, article])
) as Record<string, ContentArticle>;

export function getContentArticle(slug: string) {
  const article = contentExpansionArticleMap[slug];

  if (!article) {
    throw new Error(`Missing content article for slug: ${slug}`);
  }

  return article;
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
                <td key={`${cell}-${index}`} className="px-4 py-3">
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

export function ContentExpansionArticlePage({ slug }: { slug: string }) {
  const article = getContentArticle(slug);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            {article.cluster}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{article.title}</h1>
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
              title={article.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Video source: {article.video.channel} on YouTube
          </p>
        </section>

        <div className="mt-6 space-y-6">
          {article.sections.map((section, index) => (
            <div key={section.heading}>
              <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                  {section.table ? <ArticleTable table={section.table} /> : null}
                </div>
              </section>
              {index === 0 ? <AdSlot slot="2187236714" className="my-10" /> : null}
              {index === Math.max(2, article.sections.length - 3) ? (
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
            <h2 className="text-2xl font-semibold">Related tools and guides</h2>
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
            <h2 className="text-2xl font-semibold">Source references</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-600">
              {article.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-500">{disclaimer}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

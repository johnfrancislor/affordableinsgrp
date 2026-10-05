// Coverage pages, adapted from the agency's original site content.
// Each section renders as a heading, optional paragraphs (`p`) and an optional list (`items`).
// List items are either a string or { label, text }.

export const categories = [
  { key: "personal", label: "Personal" },
  { key: "business", label: "Business" },
  { key: "specialty", label: "Specialty" },
];

export const coverages = [
  {
    slug: "auto",
    name: "Auto Insurance",
    short: "Auto",
    icon: "car",
    category: "personal",
    image: "/images/auto.jpg",
    summary: "Protection against financial loss when the unexpected happens on the road.",
    intro: [
      "Car insurance gives you financial security, but proper coverage costs money. South Carolina drivers have an advantage here: the state's average rate is around $850, which is less than the U.S. average.",
      "It still pays to save as much as you can. With Affordable Insurance Group, you get personal service to find the best price on coverage built around you.",
    ],
    sections: [
      {
        title: "Why do you need coverage?",
        p: [
          "South Carolina requires all drivers to carry minimum levels of car insurance. You drive on crowded roads, park in public places and leave your car exposed to the weather. Your policy protects you when it matters most.",
        ],
        items: [
          "Funds to repair or replace your car after damage or loss.",
          "Money to repay others for damage you cause in an accident.",
          "Help with extra costs like towing or roadside assistance.",
        ],
      },
      {
        title: "Coverage that fits how you drive",
        items: [
          {
            label: "Liability",
            text: "Required by the state. Pays for damage you cause others when you're at fault. SC minimums: $25,000 bodily injury per person, $50,000 per accident and $25,000 property damage.",
          },
          {
            label: "Uninsured / Underinsured",
            text: "Covers you when the at-fault driver doesn't carry enough insurance. Required at the same minimum limits.",
          },
          { label: "Collision", text: "Pays for damage to your car in an accident." },
          {
            label: "Comprehensive",
            text: "Pays for non-accident damage like weather, vandalism or theft.",
          },
          { label: "Medical Payments", text: "Covers injuries to you or your passengers." },
        ],
      },
      {
        title: "Bundle and save",
        p: [
          "You can save on your premiums by bundling your home and auto policies. As an independent agency, we have many bundling options across multiple carriers.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between comprehensive and collision?",
        a: "Comprehensive generally covers damage from events other than a crash, like theft, weather or vandalism. Collision applies when your car is damaged in an accident, whether you hit another vehicle or an object.",
      },
      {
        q: "Will my insurance cover me if someone else drives my car?",
        a: "Most auto policies follow the vehicle, so coverage may extend to another licensed driver you give permission to. Limits and exclusions vary by insurer, so your agent can confirm how yours works.",
      },
      {
        q: "How does my credit score affect my premium in South Carolina?",
        a: "South Carolina allows insurers to use credit-based insurance scores as one rating factor. A stronger score can sometimes lead to lower rates. Each insurer weighs credit differently.",
      },
      {
        q: "How does a deductible work?",
        a: "Your deductible is what you pay before your insurer contributes toward a covered collision or comprehensive loss. A higher deductible usually lowers your premium.",
      },
      {
        q: "Why are auto premiums going up?",
        a: "Higher repair costs, more claims, expensive vehicle technology, weather events, inflation and rising medical costs all influence pricing, even if you haven't filed a claim.",
      },
      {
        q: "What happens to my insurance after an accident?",
        a: "Your premium may change at renewal, especially if you were at fault. Some carriers offer accident forgiveness for a first incident. Talk to your agent about your specific policy.",
      },
    ],
  },
  {
    slug: "home",
    name: "Homeowners Insurance",
    short: "Home",
    icon: "home",
    category: "personal",
    image: "/images/home.jpg",
    summary: "Insure the home itself and everything you keep inside it.",
    intro: [
      "Finding the perfect home takes a lot of work. You want that hard work protected by the best coverage available. We find the right insurance company for you and your budget, so you can focus on your family and your home.",
    ],
    sections: [
      {
        title: "What's included in home insurance?",
        items: [
          {
            label: "Dwelling",
            text: "Pays for damage to the house and attached structures, like a garage, from covered events such as fire, hail, wind, lightning, vandalism and theft.",
          },
          {
            label: "Liability",
            text: "Helps pay medical expenses or damages if you cause injury or property damage to someone else.",
          },
          {
            label: "Personal Belongings",
            text: "Replacement or cash value for furniture, clothes and more, even off your property. High-value jewelry or art may need extra coverage.",
          },
          {
            label: "Additional Living Expenses",
            text: "Helps if a disaster forces you to live somewhere else for a while.",
          },
        ],
      },
      {
        title: "Over 30 years of matching homeowners with coverage",
        p: [
          "Affordable Insurance Group has decades of experience matching clients with reliable coverage for their homes, vehicles and businesses. Bundle your home and auto to save even more.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the average cost of homeowners insurance?",
        a: "Nationally, home insurance runs around $1,228 a year. South Carolina's average is a little higher, at about $1,402, or roughly $117 a month.",
      },
      {
        q: "How far in advance can I buy home insurance?",
        a: "Surprisingly early. You should have it in place before your closing date, and you can usually prepay a year of coverage before closing.",
      },
      {
        q: "How often does homeowners insurance go up?",
        a: "Rates typically rise every year. It's a good idea to review your policy at each renewal, and we're happy to re-shop it for you.",
      },
    ],
  },
  {
    slug: "renters",
    name: "Renters Insurance",
    short: "Renters",
    icon: "key",
    category: "personal",
    image: "/images/home.jpg",
    summary: "Replace what's damaged or stolen. Your landlord's policy only covers the building.",
    intro: [
      "If you rent an apartment or house, you need insurance to protect your belongings. Your landlord's insurance only protects the building. Your things aren't covered.",
    ],
    sections: [
      {
        title: "What renters insurance covers",
        p: [
          "Renters insurance covers your possessions against fire or smoke, lightning, vandalism, theft, explosion, windstorm and water damage from plumbing. It does not cover floods, earthquakes or routine wear and tear, but separate flood and earthquake policies are available.",
        ],
      },
      {
        title: "If you're forced out of your home",
        p: [
          "Renters insurance pays reasonable extra costs of living elsewhere after a fire, severe storm or other insured disaster: hotel bills, temporary rentals, restaurant meals and more while your home is repaired.",
          "It also covers your responsibility to others injured at your home or elsewhere by you, a family member or your pet, including legal defense costs.",
        ],
      },
      {
        title: "Decide how much insurance you need",
        p: [
          "Add up the cost of everything you'd want to replace if it were damaged or stolen. Record model numbers, purchase dates and places, and take photos or video. Keep a copy of the inventory somewhere safe away from home. It makes filing a claim much easier.",
        ],
      },
    ],
  },
  {
    slug: "life",
    name: "Life Insurance",
    short: "Life",
    icon: "heart",
    category: "personal",
    image: "/images/family.jpg",
    summary: "Financial support for your family when they need it most.",
    intro: [
      "Life insurance is designed to ease your family's burden after you pass away. With the right policy, your family receives the support they need to stay stable during a time of loss and uncertainty.",
    ],
    sections: [
      {
        title: "Types of life insurance",
        p: [
          "When the policyholder passes, a named beneficiary receives a sum called the death benefit. The amount depends on the policy type and the coverage you choose.",
        ],
        items: [
          {
            label: "Term life",
            text: "Covers a set period, commonly 10, 20 or 30 years. Pays a death benefit if the insured passes during the term. Coverage ends if the term expires.",
          },
          {
            label: "Whole life",
            text: "Lifelong coverage with a cash value that builds over time and can be accessed during your lifetime.",
          },
        ],
      },
      {
        title: "More options to explore",
        p: [
          "Your agent can also walk you through universal life, final expense, group and individual life, long-term care, second-to-die policies and mortgage protection insurance.",
        ],
      },
      {
        title: "How much does life insurance cost?",
        p: [
          "Rates vary based on your age, income, the coverage you choose and other factors. Contact us and we'll help you find the right amount at the right price.",
        ],
      },
    ],
  },
  {
    slug: "health",
    name: "Health Insurance",
    short: "Health",
    icon: "pulse",
    category: "personal",
    image: "/images/family.jpg",
    summary: "Coverage options for medical, surgical and hospital expenses.",
    intro: [
      "There are two main kinds of health insurance: fee-for-service and managed care. Both cover a range of medical, surgical and hospital expenses. Most also cover prescriptions, and some include dental.",
    ],
    sections: [
      {
        title: "Kinds of health insurance",
        items: [
          {
            label: "Fee-for-service",
            text: "The provider is paid for each service. You see the doctor of your choice, and either you or the provider files the claim.",
          },
          {
            label: "Managed care",
            text: "Includes HMOs, PPOs and point-of-service plans. These offer comprehensive services and financial incentives for using in-network providers.",
          },
        ],
      },
      {
        title: "What is long-term care?",
        p: [
          "Due to age, illness or injury, some people need help with daily activities like eating, bathing, dressing or getting out of bed. Needing help with two or more of these activities, or having a cognitive impairment, generally means you need long-term care.",
          "Long-term care can be provided at home, in an adult day care center, an assisted living facility or a nursing home. Medicare and most private health insurance generally pay only for skilled medical care, not this kind of custodial care, so planning ahead matters.",
        ],
      },
    ],
  },
  {
    slug: "disability",
    name: "Disability Insurance",
    short: "Disability",
    icon: "shield",
    category: "personal",
    image: "/images/agent.jpg",
    summary: "Protect your most important asset: your ability to earn an income.",
    intro: [
      "Your ability to earn a paycheck is your most important asset. Disability insurance replaces part of your income if an illness or injury keeps you from working.",
    ],
    sections: [
      {
        title: "Short-term vs. long-term",
        items: [
          {
            label: "Short-term disability (STD)",
            text: "A waiting period of 0 to 14 days, with benefits lasting up to two years.",
          },
          {
            label: "Long-term disability (LTD)",
            text: "A waiting period of several weeks to several months, with benefits lasting a few years up to the rest of your life.",
          },
        ],
      },
      {
        title: "Two protection features to understand",
        items: [
          {
            label: "Non-cancelable",
            text: "The insurer can't cancel the policy except for nonpayment, and you can renew every year with no premium increase or benefit reduction.",
          },
          {
            label: "Guaranteed renewable",
            text: "You can renew with the same benefits, but the insurer may raise premiums for everyone in your rating class.",
          },
        ],
      },
      {
        title: "Options worth considering",
        items: [
          { label: "Additional purchase options", text: "The right to buy more coverage later." },
          {
            label: "Coordination of benefits",
            text: "This policy makes up the difference between other disability benefits and your target amount.",
          },
          {
            label: "Cost of living adjustment",
            text: "Benefits grow with the Consumer Price Index, for a higher premium.",
          },
          {
            label: "Residual / partial disability",
            text: "Return to work part-time and still receive a partial benefit.",
          },
          {
            label: "Return of premium",
            text: "Get part of your premium back if you don't file a claim for a set period.",
          },
          {
            label: "Waiver of premium",
            text: "No premiums due after you've been disabled for 90 days.",
          },
        ],
      },
    ],
  },
  {
    slug: "flood",
    name: "Flood Insurance",
    short: "Flood",
    icon: "droplet",
    category: "specialty",
    image: "/images/home.jpg",
    summary: "Flood losses aren't covered by your homeowners policy. This is.",
    intro: [
      "Here's something you should know: flood losses are not covered by your homeowners insurance. Floodwaters can damage your home, your sense of security and your financial future.",
    ],
    sections: [
      {
        title: "Don't count on disaster relief",
        p: [
          "Federal disaster assistance is only available if the President formally declares a disaster. Even then, it's often a loan you have to repay with interest, on top of the mortgage you still owe on the damaged home.",
        ],
      },
      {
        title: "Flood insurance pays, declared disaster or not",
        p: [
          "Flood insurance claims are paid even if a disaster isn't federally declared, and unlike federal aid, the money never has to be repaid.",
        ],
      },
      {
        title: "Buy before you need it",
        p: [
          "A flood policy generally doesn't take effect until 30 days after purchase. If you wait until a flood alert is in the forecast, it's already too late.",
        ],
      },
    ],
  },
  {
    slug: "motorcycle",
    name: "Motorcycle Insurance",
    short: "Motorcycle",
    icon: "bike",
    category: "specialty",
    image: "/images/auto.jpg",
    summary: "Enjoy the open road without worrying about your bike or your wallet.",
    intro: [
      "You'll enjoy the open road even more when you're not worried about the safety of yourself, your passengers or your investment. Your motorcycle may be one of your most prized possessions. It deserves special protection.",
    ],
    sections: [
      {
        title: "Why insure your motorcycle?",
        items: [
          "Repairing or replacing a damaged or stolen bike can cost a lot of money.",
          "Medical costs for you or a passenger can be extremely expensive.",
          "If your bike causes damage or injury to others, you could be sued for much more than you're worth.",
        ],
      },
      {
        title: "Questions to ask your agent",
        items: [
          "How much could I afford to pay if my bike is damaged or stolen, and what would a higher deductible save me?",
          "What discounts are available for safety courses, multiple policies, garage storage or association membership?",
          "How much medical and liability coverage should I have?",
          "Does the company have a good reputation for paying claims fairly and promptly?",
        ],
      },
      {
        title: "Tips for the cost-conscious rider",
        p: [
          "Many carriers offer 10–15% discounts for graduates of rider-training courses like the Motorcycle Safety Foundation course, which is especially valuable for riders under 25. A clean driving record helps too.",
          "Ask about multi-bike, organization and mature rider discounts. The type, style and age of your bike, how many miles you ride and where you store it also affect your premium.",
        ],
      },
    ],
  },
  {
    slug: "recreational-vehicles",
    name: "Recreational Vehicle Insurance",
    short: "RV & Boat",
    icon: "rv",
    category: "specialty",
    image: "/images/recreational.jpg",
    summary: "True RV coverage for motorhomes, travel trailers and the gear inside.",
    intro: [
      "Without a true recreational vehicle insurance package, a loss with your RV could be an unpleasant ordeal. Your auto and homeowners policies may not cover appliances, plumbing or accessories, and emergency expenses on the road would come out of your own pocket.",
    ],
    sections: [
      {
        title: "Coverage beyond the basics",
        p: [
          "A typical travel trailer policy from an auto carrier includes physical damage coverage only. Our A+ rated motorhome and travel trailer carriers provide coverage far beyond what your auto insurer offers.",
        ],
      },
    ],
  },
  {
    slug: "business",
    name: "Business & Commercial Insurance",
    short: "Business",
    icon: "briefcase",
    category: "business",
    image: "/images/business.jpg",
    summary: "Protect your earnings, assets and people from accidents and lawsuits.",
    intro: [
      "Running a business in South Carolina means dealing with accidents, lawsuits and property damage. Business insurance helps you avoid major costs when those issues come up, and full protection usually involves several types of coverage.",
    ],
    sections: [
      {
        title: "What does business insurance cover?",
        p: ["A commercial policy can be adjusted to match your business's size, industry and goals."],
        items: [
          {
            label: "General liability",
            text: "Legal costs and settlements if you're responsible for third-party injury, property damage or personal injury.",
          },
          {
            label: "Business interruption",
            text: "Lost revenue and ongoing costs if a covered event forces you to close temporarily.",
          },
          {
            label: "Commercial property",
            text: "Your building, equipment and inventory against fire, storms, theft and vandalism.",
          },
          {
            label: "Workers' compensation",
            text: "Employee medical bills and lost wages after a job-related injury.",
          },
          {
            label: "Commercial auto",
            text: "Damage to business vehicles and driver liability.",
          },
          {
            label: "And more",
            text: "Professional liability, cyber and employment practices liability for broader needs.",
          },
        ],
      },
      {
        title: "How much does it cost?",
        p: ["Insurers set commercial rates based on:"],
        items: [
          "Industry and location",
          "Workforce size",
          "Assets and revenue",
          "Claims history",
          "Coverage details, like endorsements, limits and deductibles",
        ],
      },
      {
        title: "Industries we write for",
        items: ["Contractors", "Landscapers", "Janitorial", "Auto dealers", "Plumbers", "HVAC", "And plenty more"],
      },
    ],
  },
  {
    slug: "contractors",
    name: "Contractors Insurance",
    short: "Contractors",
    icon: "hardhat",
    category: "business",
    image: "/images/contractors.jpg",
    summary: "Coverage built around your trade, your contracts and your crew.",
    quoteUrl: "https://quickquote.ibqsystems.com/affordable/Contractors/#Location",
    intro: [
      "Every contractor, of every shape and size, needs insurance. You may be your own boss, but you still have to meet your clients' contract terms, and your work carries risks to you and others. The right policies pay for accidents in your line of work.",
    ],
    sections: [
      {
        title: "Who counts as a contractor?",
        items: [
          "Independent construction contractors",
          "Plumbers, carpenters, electricians, painters and repair people",
          "Freelance writers, editors and graphic designers",
          "Accountants and financial planners",
          "House and carpet cleaners",
          "Independent hair stylists and salon professionals",
          "Business service professionals",
        ],
      },
      {
        title: "Policies you may need",
        items: [
          {
            label: "Commercial General Liability",
            text: "Pays for third-party property damage and bodily injury, like damaging a client's property while you work on it.",
          },
          {
            label: "Property",
            text: "For business possessions and contents, whether you work from an office or home.",
          },
          {
            label: "Business Interruption",
            text: "Helps pay utilities and salaries if you have to shut down after an accident.",
          },
          {
            label: "Commercial Auto",
            text: "Collision, comprehensive, liability and uninsured motorist coverage for work vehicles.",
          },
          {
            label: "Errors & Omissions",
            text: "Professional liability if your advice causes someone financial harm.",
          },
          {
            label: "Cyber Liability",
            text: "Helps you repay customers after a data breach.",
          },
          {
            label: "Workers' Compensation",
            text: "Medical expenses and lost income for employees hurt on the job.",
          },
          {
            label: "Builder's Risk",
            text: "Covers property and materials while construction is underway, often written per project.",
          },
        ],
      },
      {
        title: "Ask about a Business Owners Policy (BOP)",
        p: [
          "A BOP packages the essentials, usually property, general liability and business interruption, into one policy, with room to add more. Most contractors qualify.",
        ],
      },
      {
        title: "A note for business owners",
        p: [
          "Hiring a contractor? Make sure they carry their own insurance. Your commercial policy usually provides limited protection for contractors, if any.",
        ],
      },
    ],
  },
  {
    slug: "trucking",
    name: "Trucking Insurance",
    short: "Trucking",
    icon: "truck",
    category: "business",
    image: "/images/business.jpg",
    summary: "Coverage for owner-operators and fleets: the truck, the cargo and the road.",
    intro: [
      "Commercial truck owners and operators can't get by on a standard commercial auto policy. Beyond the cargo, truckers have to consider the damage a big rig can cause, potential environmental issues and the high cost of repairing large vehicles.",
    ],
    sections: [
      {
        title: "Trucking coverages",
        items: [
          {
            label: "Liability",
            text: "Covers bodily injury and property damage you unintentionally cause, from a retailer's loading dock to other drivers and pedestrians.",
          },
          {
            label: "Cargo",
            text: "Reimburse clients for damage to their freight in transit without tapping your business account beyond the deductible.",
          },
          {
            label: "Bobtail",
            text: "Protects your truck when it's running without cargo.",
          },
          {
            label: "Physical damage",
            text: "Collision and comprehensive for accidents, theft, vandalism and fire.",
          },
          {
            label: "Environmental liability",
            text: "Pays for cleanup if hazardous cargo spills in a qualifying accident.",
          },
        ],
      },
    ],
  },
  {
    slug: "bonds",
    name: "Bonds & Surety Bonds",
    short: "Bonds",
    icon: "badge",
    category: "business",
    image: "/images/contractors.jpg",
    summary: "License, permit, contract and construction bonds that help you win work.",
    intro: [
      "No matter how committed you are, a project can still go wrong. Bonds protect the people you work with if your business falls short, and they show clients you have the financial backing to do the job right.",
    ],
    sections: [
      {
        title: "What's a surety bond?",
        p: [
          "A surety bond guarantees you'll complete the work as agreed. If you don't, your client can file a claim against the bond to recover their losses. Common types include license and permit bonds, construction bonds and contract bonds.",
        ],
      },
      {
        title: "The three parties",
        items: [
          { label: "Principal", text: "You. The business that buys the bond." },
          { label: "Obligee", text: "Your client or customer, who benefits from the bond." },
          {
            label: "Surety",
            text: "The company that issues the bond. If it pays a claim, it seeks reimbursement from the principal.",
          },
        ],
      },
      {
        title: "How bonds differ from insurance",
        p: [
          "With insurance, the insurer pays on your behalf. With a bond, you're ultimately responsible for repaying the settlement. It's a guarantee that you'll cover your customer's losses.",
        ],
      },
      {
        title: "Who needs them, and how much?",
        p: [
          "Auto dealers, mortgage brokers, contractors and many professional service businesses may be required to be bonded, and many clients require it before signing. The amount usually depends on your contract terms, industry standards and your company's net worth.",
        ],
      },
    ],
  },
];

export function getCoverage(slug) {
  return coverages.find((c) => c.slug === slug);
}

export const featured = ["auto", "home", "business", "contractors", "life", "recreational-vehicles"];

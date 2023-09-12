const { toKebabCase } = require("./utils");

const articles = [
    {
        key: "post2023091201",
        title: "The Transformative Power of AI in Caring for Older Adults",
        image: "doctor-examines-heart.jpg",
        imageAlt: "Doctor examines heart",
        date: "September 12, 2023",
        tag: "patients"
    },
    {
        key: "post2023091200",
        title: "Improving the Family Experience in Healthcare: The Role of Communication",
        image: "doctor-with-grandmother-and-granddaughter.jpg",
        imageAlt: "Doctor stays with grandmother and her granddaughter",
        date: "September 12, 2023",
        tag: "family"
    },
    {
        key: "post2023090600",
        title: "Empowering Patients: The Rise of Shared Decision-Making",
        image: "doctor-holds-patients-hand.jpg",
        date: "September 6, 2023",
        tag: "patients"
    },
    {
        key: "post2023083000",
        title: "Preventing Cyberchondria Among Your Patients",
        image: "elder-women.jpg",
        imageAlt: "Elder Women",
        date: "August 30, 2023",
        tag: "patients",
    },
    {
        key: "post2023082300",
        title: "How to Succeed in Value-Based Care: Patient & Family Engagement",
        image: "family-with-patient-in-room.jpg",
        imageAlt: "Family with patient in room",
        date: "August 23, 2023",
        tag: "family",
    },
    {
        key: "post2023081600",
        title: "Enhancing Patient & Family Engagement: A Pathway to Financial Success in Healthcare",
        image: "man-listening-to-presentation.jpg",
        imageAlt: "Man listening to presentation",
        date: "August 16, 2023",
        tag: "healthcare",
    },
    {
        key: "post2023080900",
        title: "Improving Patient Retention with Effective Communication",
        image: "medical-exam.jpg",
        imageAlt: "Medical Examination",
        date: "August 9, 2023",
        tag: "healthcare"
    },
    {
        key: "post2023080200",
        title: "Seamless Healthcare Journeys: How Payers & Providers Can Unleash the Value of Smooth Care Transitions",
        image: "discharge-patient.jpg",
        imageAlt: "Discharge patient",
        date: "August 2, 2023",
        tag: "healthcare"
    },
    {
        key: "post2023072600",
        title: "Reducing Surgery Cancellations with Patient Engagement Strategies",
        image: "surgery.jpg",
        imageAlt: "Surgeon team",
        date: "July 26, 2023",
        tag: "healthcare",
    },
    {
        key: "post2023071900",
        title: "How Digital Health Is Changing Home Health Care As We Know It",
        image: "elder-man-in-chair.jpg",
        imageAlt: "Elder man in chair",
        date: "July 19, 2023",
        tag: "home care",
    },
    {
        key: "post2023071200",
        title: "The Secret Solution to Improving Outcomes: Family Engagement",
        image: "doctor-with-family.jpg",
        imageAlt: "Doctor with family",
        date: "July 12, 2023",
        tag: "family",
    },
    {
        key: "post2023070500",
        title: "Unlocking the Power of Patient & Family Engagement in Home-Based Care",
        image: "nurse-explains-prescription.jpg",
        imageAlt: "Nurse explains prescription",
        date: "July 5, 2023",
        tag: "family"
    },
    {
        key: "post2023062800",
        title: "Transforming Healthcare with the Power of Engagement",
        image: "mature-woman-in-consultation.jpg",
        imageAlt: "Mature woman in consultation",
        date: "June 28, 2023",
        tag: "healthcare"
    },
    {
        key: "post2023062100",
        title: "Unveiling the Unsung Heroes: How Family Members Impact Patient Outcomes",
        image: "father-with-son.jpg",
        imageAlt: "Father with son",
        date: "June 21, 2023",
        tag: "family"
    },
    {
        key: "post2023061400",
        title: "Navigating the Healthcare Maze: The Burden of Care Coordination on Patients' Experiences",
        image: "thinking-woman.jpg",
        imageAlt: "Thinking Woman",
        date: "June 14, 2023",
        tag: "family"
    },
    {
        key: "post2023060800",
        title: "Addressing the Forgotten 50%:  The Key to Better Patient Education",
        image: "doctor-showing-tablet.jpg",
        imageAlt: "Doctor's hand",
        date: "June 8, 2023",
        tag: "family"
    },
    {
        key: "post2023053100",
        title: "Unleashing the Potential of Patient & Family Engagement Solutions",
        image: "woman-checking-phone.jpg",
        imageAlt: "Woman checking phone",
        date: "May 31, 2023",
        tag: "family"
    },
    {
        key: "post2023052400",
        title: "Transform Care Delivery: Strategies for a Successful Patient- and Family-Centered Approach",
        image: "doctors-hand.jpg",
        imageAlt: "Doctor's hand",
        date: "May 24, 2023",
        tag: "family"
    },
    {
        key: "post2023051700",
        title: "One-Third of Patients Don't Receive Education: Here's How to Fill the Gap",
        image: "doctor-explaining-result-to-patient.jpg",
        imageAlt: "Doctor explains result to patient",
        date: "May 17, 2023",
        tag: "healthcare"
    },
    {
        key: "post2023051100",
        title: "Embracing the Power of Partnership: Patient and Family-Centered Care for All",
        image: "doctor-with-patient-and-daughter.jpg",
        imageAlt: "Doctor with patient and daughter",
        date: "May 11, 2023",
        tag: "family"
    },
    {
        key: "post2023042500",
        title: "Putting Families at the Heart of the ICU: Guidelines for Compassionate Care",
        image: "nurse-asking-family.jpg",
        imageAlt: "Nurse asks family",
        date: "April 25, 2023",
        tag: "family"
    },
    {
        key: "post2023041800",
        title: "Nursing After the Pandemic: The Lingering Impact on Healthcare Workers and How to Address It",
        image: "nurse-in-icu.jpg",
        imageAlt: "Nurse in ICU",
        date: "April 18, 2023",
        tag: "Healthcare",
    },
    {
        key: "post2023041100",
        title: "Empowering Family Members: A Key Strategy for Reducing Hospital Readmissions",
        image: "avoid-scrambling.jpg",
        imageAlt: "Admission",
        date: "April 11, 2023",
        tag: "family"
    },
    {
        key: "post2022103000",
        title: "Diya Health Expands Its Healthcare Expertise with the Appointment of Dr. Joe Ponnezhan as Executive Medical Director",
        image: "dr-joe-ponnezhan.jpg",
        imageAlt: "Dr. Joe Ponnezhan",
        alignment: "0 45%",
        date: "October 30, 2022",
        tag: "team",
    },
    {
        key: "post2022102400",
        title: "Diya Health Unlocks Patient Experience Improvements: Family Engagement is the Key",
        image: "diya-health-unlocks-patient-experience-improvements.jpg",
        imageAlt: "Doctor with Couple",
        date: "October 24, 2022",
        tag: "family"
    },
    {
        key: "post2022092600",
        title: "Diya Health Strengthens Its Team with Appointment of Susan Pasley as Clinical Growth Advisor",
        image: "susan.jpg",
        imageAlt: "Susan Pasley",
        date: "September 26, 2022",
        tag: "team"
    },
    {
        title: "U.S. Cardiologists Partner With Diya Health to Extend Their Reach to Rural India",
        description: "Diya Health, an innovative Silicon Valley-based digital health firm, has partnered with U.S. cardiologists to provide care to patients with severe heart conditions in Himachal Pradesh, India. ",
        href: "./posts/u-s-cardiologists-partner-with-diya-health-to-extend-their-reach-to-rural-india.html",
        image: "patient-doctor-call.jpg",
        date: "February 2, 2021",
    },
    {
        title: "Digital Health Enhances Senior Care",
        description: "As the baby boomer population ages, the U.S. faces a surge in healthcare utilization. Older adults commonly develop age-related illnesses, leading to an increased need for support. Fortunately, the Centers for Medicare & Medicaid Services developed the Program for All-Inclusive Care for the Elderly (PACE) to provide necessary medical care, therapies, meals, transportation, social activities, and long-term care to older adults. Now, with more than 54,000 older adults served, PACE has implemented digital health tools to improve the coordination of care and maintain services during the COVID-19 pandemic.",
        href: "./posts/digital-health-enhances-senior-care.html",
        image: "doctor-with-woman.jpg",
        date: "November 17, 2020",
    },
    {
        title: "Telehealth Transforms In-Home Care",
        description: "The current pandemic underscores the increasing importance of telehealth, which reduces the need for risky travel and interpersonal contact. Like hospitals and private clinics, home-health agencies are now developing and using comprehensive, safe telehealth programs for their patients. The need for palliative care and home-health services is expected to double by 2060; thus telehealth will continue to transform in-home treatment.",
        href: "./posts/telehealth-transforms-in-home-care.html",
        image: "telehealth.jpg",
        date: "November 10, 2020",
    },
    {
        title: "Is Telehealth Overrated?",
        description: "Use of telehealth has increased remarkably as a result of the COVID-19 pandemic, and there are clear benefits for patients and clinicians. It reduces the cost of providing care, makes care more accessible, and reduces the need for travel and interpersonal contact during the pandemic. In addition, telehealth facilitates better coordination of care and better management of chronic disease.",
        href: "./posts/is-telehealth-overrated.html",
        image: "doctor-in-front-of-computer.png",
        date: "November 3, 2020",
    },
    {
        title: "Your New Competitor: Big Tech",
        description: "Big Tech companies like Amazon and Apple are breaking into the healthcare industry. They bring with them massive funding, advanced technology, and powerful corporate support. To compete effectively, primary care clinics and private practices need strong technology, loyal patients, and effective marketing. Diya Health's novel and unique software, DiyaMD, will help clinicians meet the challenge.",
        href: "./posts/your-new-competitor-big-tech.html",
        image: "doctors-hands.webp",
        date: "October 27, 2020",
    },
    {
        title: "Adapt to Changes in Telehealth Insurance Coverage?",
        description: "Use of telehealth is increasing in response to COVID-19, and it is evident that it will be a permanent and significant component of healthcare delivery. As a clinician, you may like telehealth or dislike it. Either way, DiyaMD, our novel software, can make telehealth easy and remunerative for you.",
        href: "./posts/adapt-to-changes-in-telehealth-insurance-coverage.html",
        image: "doctor-in-front-of-computer.png",
        date: "October 13, 2020",
    },
    {
        title: "The EHR Is a Thing of the Past",
        description: "Current electronic health record (EHR) systems are limited and becoming obsolete, according to Epic's CEO and founder Judy Faulkner. Future EHRs will be more comprehensive, foster patient engagement, and take into account social determinants of health. The result will be better preventive care, fewer hospital admissions, and reduced total healthcare expenditure.",
        href: "./posts/the-ehr-is-a-thing-of-the-past.html",
        image: "computer-with-monoscope.webp",
        date: "October 10, 2020",
    },
    {
        title: "Stay Competitive Against Pharmacy-Based Clinics",
        description: "Pharmacy-based clinics are proliferating, competing directly with private medical practices. They are less expensive for the consumer than typical outpatient services, and they offer convenience — patients can consult a doctor, pick up prescriptions, and do other shopping all during the same visit.",
        href: "./posts/stay-competitive-against-pharmacy-based-clinics.html",
        image: "diyamd-logo-computer.jpg",
        date: "October 6, 2020",
    },
    {
        title: "Reduce Paperwork and Increase Revenue with DiyaMD",
        description: "Would you like to reduce time spent on tedious paperwork and instead use that time to provide billable patient-care? DiyaMD, a novel application for use by clinicians, can help you do just that.",
        href: "./posts/reduce-paperwork-and-increase-revenue-with-diyamd.html",
        image: "monoscope.jpg",
        date: "September 29, 2020",
    },
    {
        title: "Increase Revenue and Reduce Costs with DiyaMD's Remote Patient Monitoring",
        description: "The advent of telehealth and remote patient monitoring (RPM) is changing the delivery of health care. Before this technological innovation, clinicians needed to use valuable time and equipment to treat patients in person, and did not know whether a patient later complied with instructions. Now, RPM enables clinicians to monitor patients' health more frequently, increasing chances for better outcomes.",
        href: "./posts/increase-revenue-and-reduce-costs-with-diyamd-s-remote-patient-monitoring.html",
        image: "apple-watch.png",
        date: "September 22, 2020",
    },
    {
        title: "DiyaMD Makes Compliance with Stage 3 Easy",
        description: "DiyaMD, our novel health-record application for use by clinicians, allows you to easily comply with and meet the objectives of Stage 3 of the Meaningful Use Act",
        href: "./posts/diyamd-makes-compliance-with-stage-3-easy.html",
        image: "diyamd-logo-computer.jpg",
        date: "September 15, 2020",
    },
    {
        title: "Provide Excellent Care with DiyaMD",
        description: "In recent emails, we have sent you information about our novel software application for clinicians, DiyaMD, and its unique capabilities. Perhaps the most valuable feature for you, the clinician, is that it displays on your smartphone or computer screen the entirety of a patient's health information. It is the only software that does so. The information is automatically assembled from the multiple disconnected locations where it is currently stored",
        href: "./posts/provide-excellent-care-with-diyamd.html",
        image: "import-on-screen.jpg",
        date: "September 8, 2020",
    },
    {
        title: "Protect Your Practice with DiyaMD's COVID-19 Management Capabilities",
        description: "The COVID-19 pandemic has caused sharp declines in revenue for private medical practices, and has made office visits by patients risky for clinicians and their staff. Diya Health's novel technology addresses these difficulties with a threefold approach",
        href: "./posts/protect-your-practice-with-diyamd-s-covid-19-management-capabilities.html",
        image: "covid-tracker-page.jpg",
        date: "September 1, 2020",
    },
    {
        title: "DiyaMD: One Platform For Everyone",
        description: "Maintaining the highest quality of medical care is of utmost importance to healthcare providers and to Diya Health. To this end, we have developed DiyaMD, a novel means of communication and sharing of health records that allows clinicians, patients, caregivers, and billing staff all to connect on a single software platform. Rather than doing tedious paperwork and searching for contact information, clinicians can instead use their valuable time caring for patients.",
        href: "./posts/diyamd-one-platform-for-everyone.html",
        image: "diya-md.jpg",
        date: "August 25, 2020",
    },
    {
        title: "Get Ahead of the Competition with DiyaMD's Billable E-Service Capabilities",
        description: "DiyaMD — the next generation telehealth platform — automatically captures billable telehealth and e-services so you can maximize your revenue. Whenever you conduct a telehealth visit or monitor a patient remotely, DiyaMD automatically captures the billable activity. This streamlining allows you and your staff to spend less time on billing matters and more time on patient care.",
        href: "./posts/automatically-bill-for-e-services-with-diyamd.html",
        image: "e-service.jpg",
        date: "August 19, 2020",
    },
    {
        title: "Protecting Health Information is Diya Health's Top Priority",
        description: "Recent growth in the use of telehealth makes it more difficult to keep patients' medical information safe. As more private practices and hospitals adopt technologies for telehealth and remote patient monitoring — in part because of the pandemic — the point-of-entry for hackers widens.",
        href: "./posts/protecting-health-information-is-diya-health-s-top-priority.html",
        image: "protect-information.jpg",
        date: "August 18, 2020",
    },
    {
        title: "Maximize Your Revenue with DiyaMD's Remote Patient Monitoring Capabilities",
        description: "The current pandemic has decreased revenues for private medical practices, and has made telehealth an almost requisite technology.  Remote patient monitoring, a billable service, has become a valuable means of providing medical care.  DiyaMD's capability for billable remote patient monitoring (CPT Codes: 99453, 99454, and 99457) can generate additional revenue of $75 - $150 per patient per month, with minimal staffing effort and costs.",
        href: "./posts/maximize-your-revenue-with-remote-patient-monitoring.html",
        image: "remote-monitoring.jpg",
        date: "August 11, 2020",
    },
    {
        title: "Avoid Medical Errors and Related Costs with DiyaMD",
        description: "Although clinicians do their best to provide the highest quality of treatment, medical errors are an inevitable danger. They result in more that 250,000 patient deaths and $20 billion in direct healthcare costs yearly. Errors in prescribing medications account for 100,000 of these deaths. We at Diya Health know that clinicians dread these errors, so we have developed a technology that alerts them to potential adverse drug reactions, dangerous dosages, and more.",
        href: "./posts/avoid-medical-errors-and-related-costs-with-diyamd.html",
        image: "alerts.jpg",
        date: "August 4, 2020",
    },
    {
        title: "Telehealth is Here to Stay, and so is DiyaMD",
        description: "DiyaMD and its complementary patient-facing software, myDiya, comprise a novel platform that focuses on high efficiency, high throughput, and billable patient-care services. It has unique capabilities for doctors, patients, and caregivers. We have already written to you about some of these, and will write to you about more.",
        href: "./posts/telehealth-is-here-to-stay-and-so-is-diyamd.html",
        image: "telehealth.jpg",
        date: "July 28, 2020",
    },
    {
        title: "Maximize Your Revenue and Grow Your Practice with DiyaMD: the Next-Gen Telehealth Platform!",
        description: "DiyaMD is a budding telehealth platform that focuses on high efficiency, high throughput, and billable patient care services. Modeled after the customary physician practice workflow, DiyaMD helps physicians optimize their time to improve patient care and increase revenue.",
        href: "./posts/maximize-your-revenue-with-diyamd.html",
        image: "diya-md.jpg",
        date: "July 15, 2020",
    },
];

function withDefaults(articles) {
    return articles.map(article => {
        if (article.title == null) {
            throw new Error("Missing blog post title");
        }
        
        const defaults = {
            href: "./blog/" + toKebabCase(article.title)
        };

        return {...defaults, ...article}
    })
}

module.exports = withDefaults(articles);
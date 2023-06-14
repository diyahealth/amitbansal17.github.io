const articles = [
    {
        title: 'Navigating the Healthcare Maze: The Burden of Care Coordination on Patients\' Experiences',
        href: './blog/navigating-the-healthcare-maze-the-burden-of-care-coordination-on-patients-experiences',
        image: 'thinking-woman.jpg',
        date: 'June 14, 2023',
        tag: 'family'
    },
    {
        title: 'Addressing the Forgotten 50%:  The Key to Better Patient Education',
        href: './blog/addressing-the-forgotten-50-the-key-to-better-patient-education',
        image: 'doctor-showing-tablet.jpg',
        date: 'June 8, 2023',
        tag: 'family'
    },
    {
        title: 'Unleashing the Potential of Patient & Family Engagement Solutions',
        href: './blog/unleashing-the-potential-of-patient-family-engagement-solutions',
        image: 'woman-checking-phone.jpg',
        date: 'May 31, 2023',
        tag: 'family'
    },
    {
        title: 'Transform Care Delivery: Strategies for a Successful Patient- and Family-Centered Approach',
        href: './blog/transform-care-delivery-strategies-for-a-successful-patient-and-family-centered-approach',
        image: 'doctors-hand.jpg',
        date: 'May 24, 2023',
        tag: 'family'
    },
    {
        title: 'One-Third of Patients Don’t Receive Education: Here’s How to Fill the Gap',
        href: './blog/one-third-of-patients-don-t-receive-education-here-s-how-to-fill-the-gap',
        image: 'doctor-explaining-result-to-patient.jpg',
        date: 'May 17, 2023',
        tag: 'healthcare'
    },
    {
        title: 'Embracing the Power of Partnership: Patient and Family-Centered Care for All',
        href: './blog/embracing-the-power-of-partnership-patient-and-family-centered-care-for-all',
        image: 'doctor-with-patient-and-daughter.jpg',
        date: 'May 11, 2023',
        tag: 'family'
    },
    {
        title: 'Putting Families at the Heart of the ICU: Guidelines for Compassionate Care',
        href: './blog/putting-families-at-the-heart-of-the-icu-guidelines-for-compassionate-care',
        image: 'nurse-asking-family.jpg',
        date: 'April 25, 2023',
        tag: 'family'
    },
    {
        title: 'Nursing After the Pandemic: The Lingering Impact on Healthcare Workers and How to Address It',
        href: './blog/nursing-after-the-pandemic-the-lingering-impact-on-healthcare-workers-and-how-to-address-it',
        image: 'nurse-in-icu.jpg',
        date: 'April 18, 2023',
        tag: 'Healthcare',
    },
    {
        title: 'Empowering Family Members: A Key Strategy for Reducing Hospital Readmissions',
        href: './blog/empowering-family-members-a-key-strategy-for-reducing-hospital-readmissions',
        image: 'avoid-scrambling.jpg',
        date: 'April 11, 2023',
        tag: 'family'
    },
    {
        title: 'Diya Health Expands Its Healthcare Expertise with the Appointment of Dr. Joe Ponnezhan as Executive Medical Director',
        href: './blog/diya-health-expands-its-healthcare-expertise-with-the-appointment-of-dr-joe-ponezhan-as-executive-medical-director',
        image: 'dr-joe-ponnezhan.jpg',
        alignment: '0 45%',
        date: 'October 30, 2022',
        tag: 'team',
    },
    {
        title: 'Diya Health Unlocks Patient Experience Improvements: Family Engagement is the Key',
        href: './blog/diya-health-unlocks-patient-experience-improvements-family-engagement-is-the-key',
        image: 'diya-health-unlocks-patient-experience-improvements.jpg',
        date: 'October 24, 2022',
        tag: 'family'
    },
    {
        title: 'Diya Health Strengthens Its Team with Appointment of Susan Pasley as Clinical Growth Advisor',
        href: './blog/diya-health-strengthens-its-team-with-appointment-of-susan-pasley-as-clinical-growth-advisor',
        image: 'susan.jpg',
        date: 'September 26, 2022',
        tag: 'team'
    },
    {
        title: 'U.S. Cardiologists Partner With Diya Health to Extend Their Reach to Rural India',
        description: 'Diya Health, an innovative Silicon Valley-based digital health firm, has partnered with U.S. cardiologists to provide care to patients with severe heart conditions in Himachal Pradesh, India. ',
        href: './posts/u-s-cardiologists-partner-with-diya-health-to-extend-their-reach-to-rural-india.html',
        image: 'patient-doctor-call.jpg',
        date: 'February 2, 2021',
    },
    {
        title: 'Digital Health Enhances Senior Care',
        description: 'As the baby boomer population ages, the U.S. faces a surge in healthcare utilization. Older adults commonly develop age-related illnesses, leading to an increased need for support. Fortunately, the Centers for Medicare & Medicaid Services developed the Program for All-Inclusive Care for the Elderly (PACE) to provide necessary medical care, therapies, meals, transportation, social activities, and long-term care to older adults. Now, with more than 54,000 older adults served, PACE has implemented digital health tools to improve the coordination of care and maintain services during the COVID-19 pandemic.',
        href: './posts/digital-health-enhances-senior-care.html',
        image: 'doctor-with-woman.jpg',
        date: 'November 17, 2020',
    },
    {
        title: 'Telehealth Transforms In-Home Care',
        description: 'The current pandemic underscores the increasing importance of telehealth, which reduces the need for risky travel and interpersonal contact. Like hospitals and private clinics, home-health agencies are now developing and using comprehensive, safe telehealth programs for their patients. The need for palliative care and home-health services is expected to double by 2060; thus telehealth will continue to transform in-home treatment.',
        href: './posts/telehealth-transforms-in-home-care.html',
        image: 'telehealth.jpg',
        date: 'November 10, 2020',
    },
    {
        title: 'Is Telehealth Overrated?',
        description: 'Use of telehealth has increased remarkably as a result of the COVID-19 pandemic, and there are clear benefits for patients and clinicians. It reduces the cost of providing care, makes care more accessible, and reduces the need for travel and interpersonal contact during the pandemic. In addition, telehealth facilitates better coordination of care and better management of chronic disease.',
        href: './posts/is-telehealth-overrated.html',
        image: 'doctor-in-front-of-computer.png',
        date: 'November 3, 2020',
    },
    {
        title: 'Your New Competitor: Big Tech',
        description: "Big Tech companies like Amazon and Apple are breaking into the healthcare industry. They bring with them massive funding, advanced technology, and powerful corporate support. To compete effectively, primary care clinics and private practices need strong technology, loyal patients, and effective marketing. Diya Health's novel and unique software, DiyaMD, will help clinicians meet the challenge.",
        href: './posts/your-new-competitor-big-tech.html',
        image: 'doctors-hands.webp',
        date: 'October 27, 2020',
    },
    {
        title: 'Adapt to Changes in Telehealth Insurance Coverage?',
        description: 'Use of telehealth is increasing in response to COVID-19, and it is evident that it will be a permanent and significant component of healthcare delivery. As a clinician, you may like telehealth or dislike it. Either way, DiyaMD, our novel software, can make telehealth easy and remunerative for you.',
        href: './posts/adapt-to-changes-in-telehealth-insurance-coverage.html',
        image: 'doctor-in-front-of-computer.png',
        date: 'October 13, 2020',
    },
    {
        title: 'The EHR Is a Thing of the Past',
        description: "Current electronic health record (EHR) systems are limited and becoming obsolete, according to Epic's CEO and founder Judy Faulkner. Future EHRs will be more comprehensive, foster patient engagement, and take into account social determinants of health. The result will be better preventive care, fewer hospital admissions, and reduced total healthcare expenditure.",
        href: './posts/the-ehr-is-a-thing-of-the-past.html',
        image: 'computer-with-monoscope.webp',
        date: 'October 10, 2020',
    },
    {
        title: 'Stay Competitive Against Pharmacy-Based Clinics',
        description: 'Pharmacy-based clinics are proliferating, competing directly with private medical practices. They are less expensive for the consumer than typical outpatient services, and they offer convenience — patients can consult a doctor, pick up prescriptions, and do other shopping all during the same visit.',
        href: './posts/stay-competitive-against-pharmacy-based-clinics.html',
        image: 'diyamd-logo-computer.jpg',
        date: 'October 6, 2020',
    },
    {
        title: 'Reduce Paperwork and Increase Revenue with DiyaMD',
        description: 'Would you like to reduce time spent on tedious paperwork and instead use that time to provide billable patient-care? DiyaMD, a novel application for use by clinicians, can help you do just that.',
        href: './posts/reduce-paperwork-and-increase-revenue-with-diyamd.html',
        image: 'monoscope.jpg',
        date: 'September 29, 2020',
    },
    {
        title: 'Increase Revenue and Reduce Costs with DiyaMD’s Remote Patient Monitoring',
        description: "The advent of telehealth and remote patient monitoring (RPM) is changing the delivery of health care. Before this technological innovation, clinicians needed to use valuable time and equipment to treat patients in person, and did not know whether a patient later complied with instructions. Now, RPM enables clinicians to monitor patients' health more frequently, increasing chances for better outcomes.",
        href: './posts/increase-revenue-and-reduce-costs-with-diyamd-s-remote-patient-monitoring.html',
        image: 'apple-watch.png',
        date: 'September 22, 2020',
    },
    {
        title: 'DiyaMD Makes Compliance with Stage 3 Easy',
        description: 'DiyaMD, our novel health-record application for use by clinicians, allows you to easily comply with and meet the objectives of Stage 3 of the Meaningful Use Act',
        href: './posts/diyamd-makes-compliance-with-stage-3-easy.html',
        image: 'diyamd-logo-computer.jpg',
        date: 'September 15, 2020',
    },
    {
        title: 'Provide Excellent Care with DiyaMD',
        description: "In recent emails, we have sent you information about our novel software application for clinicians, DiyaMD, and its unique capabilities. Perhaps the most valuable feature for you, the clinician, is that it displays on your smartphone or computer screen the entirety of a patient's health information. It is the only software that does so. The information is automatically assembled from the multiple disconnected locations where it is currently stored",
        href: './posts/provide-excellent-care-with-diyamd.html',
        image: 'import-on-screen.jpg',
        date: 'September 8, 2020',
    },
    {
        title: 'Protect Your Practice with DiyaMD’s COVID-19 Management Capabilities',
        description: "The COVID-19 pandemic has caused sharp declines in revenue for private medical practices, and has made office visits by patients risky for clinicians and their staff. Diya Health's novel technology addresses these difficulties with a threefold approach",
        href: './posts/protect-your-practice-with-diyamd-s-covid-19-management-capabilities.html',
        image: 'covid-tracker-page.jpg',
        date: 'September 1, 2020',
    },
    {
        title: 'DiyaMD: One Platform For Everyone',
        description: 'Maintaining the highest quality of medical care is of utmost importance to healthcare providers and to Diya Health. To this end, we have developed DiyaMD, a novel means of communication and sharing of health records that allows clinicians, patients, caregivers, and billing staff all to connect on a single software platform. Rather than doing tedious paperwork and searching for contact information, clinicians can instead use their valuable time caring for patients.',
        href: './posts/diyamd-one-platform-for-everyone.html',
        image: 'diya-md.jpg',
        date: 'August 25, 2020',
    },
    {
        title: 'Get Ahead of the Competition with DiyaMD’s Billable E-Service Capabilities',
        description: 'DiyaMD — the next generation telehealth platform — automatically captures billable telehealth and e-services so you can maximize your revenue. Whenever you conduct a telehealth visit or monitor a patient remotely, DiyaMD automatically captures the billable activity. This streamlining allows you and your staff to spend less time on billing matters and more time on patient care.',
        href: './posts/automatically-bill-for-e-services-with-diyamd.html',
        image: 'e-service.jpg',
        date: 'August 19, 2020',
    },
    {
        title: 'Protecting Health Information is Diya Health’s Top Priority',
        description: "Recent growth in the use of telehealth makes it more difficult to keep patients' medical information safe. As more private practices and hospitals adopt technologies for telehealth and remote patient monitoring — in part because of the pandemic — the point-of-entry for hackers widens.",
        href: './posts/protecting-health-information-is-diya-health-s-top-priority.html',
        image: 'protect-information.jpg',
        date: 'August 18, 2020',
    },
    {
        title: 'Maximize Your Revenue with DiyaMD’s Remote Patient Monitoring Capabilities',
        description: "The current pandemic has decreased revenues for private medical practices, and has made telehealth an almost requisite technology.  Remote patient monitoring, a billable service, has become a valuable means of providing medical care.  DiyaMD's capability for billable remote patient monitoring (CPT Codes: 99453, 99454, and 99457) can generate additional revenue of $75 - $150 per patient per month, with minimal staffing effort and costs.",
        href: './posts/maximize-your-revenue-with-remote-patient-monitoring.html',
        image: 'remote-monitoring.jpg',
        date: 'August 11, 2020',
    },
    {
        title: 'Avoid Medical Errors and Related Costs with DiyaMD',
        description: 'Although clinicians do their best to provide the highest quality of treatment, medical errors are an inevitable danger. They result in more that 250,000 patient deaths and $20 billion in direct healthcare costs yearly. Errors in prescribing medications account for 100,000 of these deaths. We at Diya Health know that clinicians dread these errors, so we have developed a technology that alerts them to potential adverse drug reactions, dangerous dosages, and more.',
        href: './posts/avoid-medical-errors-and-related-costs-with-diyamd.html',
        image: 'alerts.jpg',
        date: 'August 4, 2020',
    },
    {
        title: 'Telehealth is Here to Stay, and so is DiyaMD',
        description: 'DiyaMD and its complementary patient-facing software, myDiya, comprise a novel platform that focuses on high efficiency, high throughput, and billable patient-care services. It has unique capabilities for doctors, patients, and caregivers. We have already written to you about some of these, and will write to you about more.',
        href: './posts/telehealth-is-here-to-stay-and-so-is-diyamd.html',
        image: 'telehealth.jpg',
        date: 'July 28, 2020',
    },
    {
        title: 'Maximize Your Revenue and Grow Your Practice with DiyaMD: the Next-Gen Telehealth Platform!',
        description: 'DiyaMD is a budding telehealth platform that focuses on high efficiency, high throughput, and billable patient care services. Modeled after the customary physician practice workflow, DiyaMD helps physicians optimize their time to improve patient care and increase revenue.',
        href: './posts/maximize-your-revenue-with-diyamd.html',
        image: 'diya-md.jpg',
        date: 'July 15, 2020',
    },
];

module.exports = articles;
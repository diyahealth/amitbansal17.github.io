const { toKebabCase } = require('./utils');

const pages = {
    index: {
        name: "Index",
        url: "./",
        title: "Diya Health",
        description: "Diya Health's new COVID-19 platform helps employers return to work safely while staying compliant with regulatory requirements",
    },
    aboutUs: {
        name: "About Us",
        description: "Diya Health is a digital health, AI-driven Software-as-a-Service platform that empowers employers, health systems, and individuals to deliver better health outcomes at lower cost",
    },

    faq: {
        name: "Frequently Asked Questions",
        destination: "faq",
        description: "myDiya Frequently Asked Questions For Patients and Family Members",
    },
    employers: {
        name: "Employers",
        description: " Our COVID Compliance-as-a-Service platform helps employers stay in compliance with pandemic regulatory requirements and bring employees back to work safely",
    },

    wellness: {
        name: "Wellness Engagement",
        description: "Diya Wellness Engagement curates and delivers personalized content that is specific to employees’ wellness needs and goals",
    },

    familyConnect: {
        name: "Home Health",
        destination: 'family-connect',
        description: "Diya Family Connect enables families of the home health patients to stay in close contact with their loved one while freeing up the healthcare workers to focus on delivering the best care possible",
    },
    why: {
        name: "Why Diya",
        description: "Diya saves your clinicians 30+ minutes per day by automatically addressing family members’ most common questions and minimizing subsequent workflow disruptions",
    },
    healthSystems: {
        name: "Hospitals",
        source: "health-systems",
        description: "Our Discharge Companion transforms the archaic post-discharge process into a living, engaging care experience that delivers great health outcomes",
    },
    individuals: {
        name: "Individuals",
        description: "Diya Health empowers people to take control of their health information and achieve their health goals using a personal health diary",
    },
    contactUs: {
        name: "Contact Us",
        description: "Contact with Diya Health!",
    },
    blog: {
        name: "Blog",
        description: "Blogs, news, and other announcements that help employers stay compliant with COVID-19 mandates and promote a safe workplace",
    },
    newsAndResources: {
        name: "News",
        source: 'news-and-resources',
        title: "News - Diya Health",
        description: "Get news articles and resources that are helpful to doctors and patients by DiyaHealth",
    },
    privacyPolicy: {
        name: "Privacy Policy",
        description: "Privacy policy of Diya Health Website",
    },
    termsAndConditions: {
        name: "Terms & Conditions",
        source: "terms-and-conditions",
        description: "Terms and conditions of Diya Health Website",
    },

    post2022092600: {
        name: "Diya Health Strengthens Its Team with Appointment of Susan Pasley as Clinical Growth Advisor",
        description: 'Diya Health, a digital health technology platform that streamlines family engagement, announced today the appointment of Susan Pasley, MS, BSN, RN, to its Board of Advisors',
        parent: 'blog',
    },

    post2022102400: {
        name: "Diya Health Unlocks Patient Experience Improvements: Family Engagement is the Key",
        description: 'Diya Family Connect enables HIPAA-compliant, proactive communication with family members that provides them with a greater understanding of their loved one’s care',
        parent: 'blog',
    },

    post2022103000: {
        name: "Diya Health Expands Its Healthcare Expertise with the Appointment of Dr. Joe Ponnezhan as Executive Medical Director",
        description: 'Dr. Ponnezhan\'s passion for clinical excellence, operational efficiencies, and digital health technologies make him uniquely qualified to lead our medical team.',
        parent: 'blog',
    },

    post2023041100: {
        name: "Empowering Family Members: A Key Strategy for Reducing Hospital Readmissions",
        description: 'According to a recent study, engaging family members during the care transition process can help reduce hospital readmission rates',
        parent: 'blog',
    },

    post2023041800: {
        name: 'Nursing After the Pandemic: The Lingering Impact on Healthcare Workers and How to Address It',
        description: 'The pandemic exacerbated existing challenges in the nursing workforce, such as shortages, burnout, and high turnover rates',
        parent: 'blog',
    },

    post2023042500: {
        name: 'Putting Families at the Heart of the ICU: Guidelines for Compassionate Care',
        description: 'Critically ill patients often require complex and urgent care, and families may feel overwhelmed and uncertain about how to participate',
        parent: 'blog',
    },

    post2023051100: {
        name: 'Embracing the Power of Partnership: Patient and Family-Centered Care for All',
        description: 'Patient and family-centered care is an approach that prioritizes the involvement of patients and their families in decision-making processes and treatment planning',
        parent: 'blog',
    },

    post2023051700: {
        name: 'One-Third of Patients Don’t Receive Education: Here’s How to Fill the Gap',
        description: 'A recent study has shed light on the disconnect between patient desire for educational healthcare content and the current reality of its delivery',
        parent: 'blog',
    },

    post2023052400: {
        name: 'Transform Care Delivery: Strategies for a Successful Patient- and Family-Centered Approach',
        description: 'PFCC is a holistic approach that recognizes the essential role of patients and their families in healthcare decision-making and delivery',
        parent: 'blog',
    },

    post2023053100: {
        name: 'Unleashing the Potential of Patient & Family Engagement Solutions',
        description: 'How patient and family engagement solutions leverage technology to empower patients, enhance communication, and streamline healthcare delivery processes',
        parent: 'blog',
    },

    post2023060800: {
        name: 'Addressing the Forgotten 50%:  The Key to Better Patient Education',
        description: 'The complex information provided during inpatient stays leaves patients feeling overloaded and confused',
        parent: 'blog',
    },

    post2023061400: {
        name: 'Navigating the Healthcare Maze: The Burden of Care Coordination on Patients\' Experiences',
        description: 'Overburdening patients and their families with care coordination responsibilities hurt their experience',
        parent: 'blog',
    },

    post2023062100: {
        name: 'Unveiling the Unsung Heroes: How Family Members Impact Patient Outcomes',
        description: 'Caregiving is a challenging and demanding journey, impacting caregivers\' physical, emotional, social, financial, and overall well-being',
        parent: 'blog',
    },

    post2023062800: {
        name: 'Transforming Healthcare with the Power of Engagement',
        description: 'Healthcare providers and organizations increasingly recognize the importance of involving patients in their care journey',
        parent: 'blog',
    },

    post2023070500: {
        name: 'Unlocking the Power of Patient & Family Engagement in Home-Based Care',
        description: 'Dr. Jain emphasized the importance of actively involving patients and families in care journeys',
        parent: 'blog',
    },

    post2023071200: {
        name: 'The Secret Solution to Improving Outcomes: Family Engagement',
        description: 'Glenn Llopis highlights the urgent need for family caregiver empowerment as a key solution to the healthcare industry\'s challenges',
        parent: 'blog',
    },

    post2023071900: {
        name: 'How Digital Health Is Changing Home Health Care As We Know It',
        description: 'Care no longer needed to be provided in a physical facility; patients could stay in the comfort of their own homes',
        parent: 'blog',
    },

    post2023072600: {
        name: 'Reducing Surgery Cancellations with Patient Engagement Strategies',
        description: 'Day-of surgical cancellations are a significant challenge for healthcare providers, impacting both patient care and the financial health of medical facilities',
        parent: 'blog',
    },

    post2023080200: {
        name: "Seamless Healthcare Journeys: How Payers & Providers Can Unleash the Value of Smooth Care Transitions",
        description: "Ensuring smooth transitions of care is crucial for optimizing patient outcomes and controlling costs",
        parent: 'blog',
    },

    post2023080900: {
        name: "Improving Patient Retention with Effective Communication",
        description: "The article highlights the growing significance of patient-provider communication in influencing patients' choices",
        parent: "blog",
    },

    post2023081600 : {
        name: "Enhancing Patient & Family Engagement: A Pathway to Financial Success in Healthcare",
        description: "Healthcare providers improve patient satisfaction and increase adherence by involving patients and families in care delivery",
        parent: "blog",
    },

    post2023082300 : {
        name: "How to Succeed in Value-Based Care: Patient & Family Engagement",
        description: "A critical factor that will promote success for healthcare organizations in this transformative care model is robust patient and family engagement",
        parent: "blog",
    },

    post2023083000 : {
        name: "Preventing Cyberchondria Among Your Patients",
        description: "Individuals are increasingly turning to the internet for medical information and self-diagnosis",
        parent: "blog",
    },

    post2023090600: {
        name: "Empowering Patients: The Rise of Shared Decision-Making",
        description: "Both patients and providers are embracing a shift towards shared decision-making",
        parent: "blog",
    },
};

function withDefaults(pages) {
    for (const pageKey of Object.keys(pages)) {
        const page = pages[pageKey];
        if (page.name == null) {
            throw new Error('Missing page name');
        }
        const parent = page.parent ? page.parent + '/' : '';
        const normalizedName = toKebabCase(page.name);
        const source = page.source ?? parent + normalizedName;
        const destination = page.destination ?? source;
        const defaults = {
            source,
            destination,
            url: './' + destination,
            title: page.name + ' - Diya Health',
        }

        pages[pageKey] = {...defaults, ...page };
    }

    return pages;
}

module.exports = withDefaults(pages);

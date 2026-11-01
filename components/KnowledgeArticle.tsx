"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon, LightBulbIcon, ShareIcon } from "@heroicons/react/24/outline";

type Guide = { category: string; title: string; intro: string; items: string[] };
type Section = { heading: string; body: string | string[]; sources?: { label: string; href: string }[] };

const articles: Record<string, { lead: string; sections: Section[]; takeaway: string }> = {
  "it-support-kokomo": {
      "lead": "Choosing IT support in Kokomo is a practical decision about how quickly your team can get help, how systems are maintained, and who coordinates onsite work and third-party vendors. Local fit matters, but the provider should also explain remote coverage, service boundaries, security responsibilities, and recovery planning.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For it support in kokomo, indiana, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "network-security-small-business": {
      "lead": "Small-business network security starts with knowing what is connected, limiting access, keeping infrastructure current, and separating systems that do not need to trust one another. The right controls depend on the business, but unmanaged equipment and broad access make problems harder to contain.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For network security for small businesses, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "backups-small-business": {
      "lead": "A backup plan should answer what data is protected, how often copies are made, how long they are retained, who can restore them, and how recovery is tested. A dashboard showing successful jobs is only one piece of evidence; the business needs a repeatable way to restore work.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For small business backup planning, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "it-onboarding-transition": {
      "lead": "A managed IT onboarding is the structured process of learning an environment, securing access, documenting systems, validating monitoring and backups, and moving users into a support workflow. A good transition has named owners, milestones, and a prioritized list of inherited risks.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For what happens during an it onboarding or transition?, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "msp-vs-internal-it": {
      "lead": "Choosing between an MSP and an employee is a comparison of coverage, skills, availability, accountability, and total cost—not just a salary against a monthly invoice. Some businesses choose one model; others combine internal IT ownership with external support.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For msp vs. hiring an internal it person: cost comparison, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "co-managed-it": {
      "lead": "Co-managed IT combines an internal technology team with outside provider support. The business keeps internal ownership and context while adding capacity or specialist expertise for areas such as security monitoring, projects, after-hours coverage, or routine device management.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For co-managed it: how it works with internal staff, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "what-is-a-vcio": {
      "lead": "A virtual chief information officer (vCIO) provides technology planning and leadership without being a full-time executive employee. The role connects business goals to priorities, budgets, risks, vendor decisions, and a practical roadmap. The title varies by provider, so evaluate the work and deliverables.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For what does a vcio do, and when do you need one?, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "outgrown-computer-guy": {
      "lead": "A trusted independent technician may be exactly right for a very small organization. The question is whether one person’s time, availability, and range of expertise still match your business’s operating needs. Growth, new compliance duties, multiple locations, and security expectations can make informal arrangements harder to sustain.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For signs you've outgrown your computer guy, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "questions-for-an-msp": {
      "lead": "A good MSP evaluation tests more than response speed. Ask how support is delivered, who owns security and backups, how projects are quoted, what reporting leadership receives, and how a handoff works if you leave. Request specific examples and written scope so you can compare the answers.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For questions to ask before signing with an msp, begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "managed-it-contract": {
      "lead": "A managed IT contract defines which users, devices, locations, and services a provider agrees to support, how requests are handled, how recurring fees work, and what happens when the relationship ends. The title “managed services” does not guarantee a standard package. The service description, pricing schedule, and exclusions determine what you are buying.",
      "sections": [
        {
          "heading": "Start with the operating reality",
          "body": [
            "List the users, locations, systems, business hours, recurring incidents, vendor dependencies, and changes planned for the next year. Identify what would stop work, delay customers, or create a safety or privacy concern if it failed. This gives you a concrete basis for choosing a model or provider.",
            "Separate current pain from future risk. Slow support, unsupported systems, missing documentation, inconsistent onboarding, and an untested recovery plan need different remedies. Rank them by business impact and agree on which problems must be addressed first."
          ]
        },
        {
          "heading": "Make scope and ownership explicit",
          "body": [
            "Document who handles user support, account administration, endpoint protection, patching, backups, recovery, network changes, vendor escalations, projects, and after-hours incidents. Specify what is included in recurring service and what requires a separate quote. Ask how response targets are measured and how urgent issues are escalated.",
            "Confirm administrator account ownership, security alert routing, data access, documentation, licensing, and transition assistance. A reliable arrangement should not depend on one person keeping essential information in their private inbox or memory."
          ]
        },
        {
          "heading": "Evaluate the working relationship",
          "body": [
            "Ask for a sample report, onboarding outline, escalation path, and a realistic example of how the provider handled a recurring problem. Confirm who will communicate with your team, how often leadership reviews priorities, and how the provider coordinates with internal employees and other vendors.",
            "Look for clarity and follow-through. A provider should explain tradeoffs in plain terms, acknowledge uncertainty, document decisions, and distinguish urgent risk from optional improvements. Do not rely on broad promises where written service boundaries are available."
          ]
        },
        {
          "heading": "A practical next step",
          "body": "For what's included in a managed it contract (and what usually isn't), begin with a short inventory and a focused conversation about your operating requirements, risk tolerance, and budget. Ask the provider to show how the proposed approach addresses your top three needs and what evidence you will receive that the work is happening. Review the plan after onboarding and update it as the organization changes."
        }
      ],
      "takeaway": "Good technology support depends on clear scope, named owners, useful documentation, and a plan tied to how the business operates. Ask for specifics before committing and revisit the arrangement as your needs change."
  },
  "test-backup-restore": {
      "lead": "A backup is dependable only when the organization can restore the right data within an acceptable time. A restore test checks more than whether a job reported success: it confirms the copy exists, is readable, includes what matters, and can be recovered by the people who may need it during an outage.",
      "sections": [
        {
          "heading": "Choose a test that matches the risk",
          "body": [
            "Start with a low-risk file restore to a separate location, then schedule deeper tests for critical applications and systems. Include the systems whose loss would disrupt payroll, scheduling, patient or client service, production, accounting, or communications. Use a non-production environment when a full recovery could affect active operations.",
            "Test a recent recovery point and, periodically, an older point within the required retention window. Confirm that the backup covers configuration and dependencies—not only user documents."
          ]
        },
        {
          "heading": "Define pass criteria before starting",
          "body": [
            "Set a recovery point objective (how much recent data the business can lose) and a recovery time objective (how quickly a system must return). Record the source system, selected restore point, data scope, start and finish times, responsible people, and outcome. Define what “usable” means: files open, application starts, data reconciles, and access permissions are correct.",
            "A test is not successful just because data copied. Have the business owner validate a sample and confirm that the restored system supports the work it is supposed to support."
          ]
        },
        {
          "heading": "Run the test safely",
          "body": [
            "Coordinate with the provider and system owner. Restore to an alternate folder, isolated network, or test environment to avoid overwriting production or reintroducing malware. Use approved credentials and protect sensitive restored data. If you are investigating an active incident, follow responder instructions and preserve evidence before restoring.",
            "Track friction: missing encryption keys, expired admin access, unclear vendor dependencies, slow transfer speeds, insufficient storage, or undocumented steps. These findings are the value of the exercise; assign owners and dates rather than treating them as a failed test to hide."
          ]
        },
        {
          "heading": "Keep improving the process",
          "body": [
            "Retest after major changes to applications, identity, storage, or vendors and on a recurring schedule based on business risk. Update runbooks, contact information, and recovery priorities. Keep evidence of tests for leadership, auditors, and insurance applications, while avoiding claims that a single successful test guarantees future recovery.",
            "Coordinate restore tests with security, legal, compliance, and operational stakeholders when the data is regulated or subject to contractual retention requirements."
          ]
        }
      ],
      "takeaway": "Test restores to prove that protected data is complete, readable, and recoverable in time. Record results, fix gaps, and repeat after meaningful system changes."
  },
  "backed-up-or-synced": {
      "lead": "A synced file and a backup can look similar because both may let you retrieve a file from another device. They solve different problems. Synchronization keeps copies aligned for collaboration; backup preserves recoverable versions so you can restore after deletion, corruption, ransomware, or a system failure.",
      "sections": [
        {
          "heading": "What sync is designed to do",
          "body": [
            "Services such as OneDrive or SharePoint synchronize or version files so users can work across devices and share changes. This helps collaboration and may provide a recycle bin or version history. Those protections can be valuable, but their retention and recovery behavior depends on configuration and service terms.",
            "If a user deletes a file, sync may propagate the deletion. If malware encrypts documents and those changes upload, the synchronized copy may also be affected. Version history can help in some cases, but it has limits and may be unavailable, expired, or difficult to restore at scale."
          ]
        },
        {
          "heading": "What a backup adds",
          "body": [
            "A backup is a separate recovery copy with defined scope, schedule, retention, and restore process. It should include the data and systems the organization needs, preserve earlier recovery points, and be protected so a compromised everyday account cannot erase every copy. Backup products differ; verify what is actually covered rather than assuming every cloud service includes business-grade backup for all data.",
            "For Microsoft 365, confirm coverage for Exchange, SharePoint, OneDrive, Teams-related content, retention needs, and deleted accounts. Microsoft’s native service resilience is not the same thing as a customer-managed backup strategy for every recovery scenario."
          ]
        },
        {
          "heading": "How to tell whether you are protected",
          "body": [
            "Pick an important file and ask: can we restore a version from before accidental deletion? What if a user’s account is compromised? What if an administrator deletes the data? How far back can we recover? Who can initiate a restore, how long does it take, and does the restored content retain the right permissions?",
            "Check backup job reports, retention settings, account separation, immutability or offline copies, and the date of the last restore test. Test with representative files and a critical system, not just a sample success notification."
          ]
        },
        {
          "heading": "Build a recovery approach",
          "body": "Use sync for collaboration and a separate, monitored backup for recovery where the data’s importance warrants it. Map business-critical information, set recovery targets, restrict backup administration, and test restores regularly. Keep the instructions and emergency contacts accessible if the normal email or network is unavailable."
        }
      ],
      "takeaway": "Sync helps current work follow users and devices; backup preserves independent recovery points. Confirm retention, access separation, and restore capability instead of assuming sync alone is enough."
  },
  "dark-web-monitoring": {
      "lead": "Dark-web monitoring searches selected illicit or exposed sources for information such as email addresses, passwords, or business domains. It can alert an organization that credentials may have appeared in a breach dataset, but it cannot show every source, confirm that a credential still works, or prevent an attacker from using it.",
      "sections": [
        {
          "heading": "What a monitoring alert can tell you",
          "body": [
            "An alert may identify an email address or password associated with a known breach dataset, along with the source or approximate discovery date. Treat it as a signal to investigate. The data can be old, incomplete, duplicated, or already changed; it may not prove that the person’s current account is compromised.",
            "Monitoring coverage varies by vendor and source. A clean report does not mean no credentials or data are circulating. Criminal forums are fragmented, some information is private or short-lived, and some exposure never appears in the monitored sources."
          ]
        },
        {
          "heading": "Respond to exposed credentials",
          "body": [
            "If a business password may have been exposed, change it from a trusted device, make sure it is unique, and revoke active sessions where the service supports it. Enable or verify MFA, review sign-in logs and recovery methods, and check for unexpected mailbox rules or connected applications. Prioritize administrators, email, finance, remote access, and vendor accounts.",
            "If the exposed password was reused, change it anywhere else it was used. A password manager helps prevent repeat reuse. Notify the account owner through an appropriate private channel and follow the organization’s incident process if there are signs of active access."
          ]
        },
        {
          "heading": "Use it as one part of credential security",
          "body": [
            "Preventive controls matter more than watching for leaked secrets: unique passwords, MFA, password managers, secure onboarding and offboarding, least privilege, and monitoring of sign-in activity reduce the value of stolen credentials. Staff should know how to report unexpected MFA prompts and suspected account compromise.",
            "Ask a monitoring provider what sources it checks, how often it searches, how quickly alerts arrive, what evidence accompanies an alert, and who is responsible for acting. Clarify whether the service looks for personal employee details and how it handles privacy and retention."
          ]
        },
        {
          "heading": "Set realistic expectations",
          "body": "Dark-web monitoring can provide useful exposure intelligence, especially when paired with a defined response workflow. It is not a breach-prevention guarantee, a full inventory of stolen data, or a substitute for incident response. Evaluate whether alerts lead to prompt credential changes and access reviews; otherwise, the service may produce reports without reducing risk."
        }
      ],
      "takeaway": "Treat dark-web alerts as leads, not proof. Confirm what is exposed, secure the affected accounts, and use MFA, unique passwords, and sign-in monitoring to reduce credential risk."
  },
  "security-awareness-training": {
      "lead": "Security awareness is most useful when employees know how to recognize a risky situation, take a safe next step, and report it without delay. A yearly slideshow or a high-stakes phishing test by itself is unlikely to change how a team handles real requests.",
      "sections": [
        {
          "heading": "Teach the situations people actually face",
          "body": [
            "Use examples from your organization’s work: an invoice with new bank details, an MFA prompt the user did not initiate, a shared document link, a voicemail from a supposed vendor, or a request to buy gift cards. Explain the warning signs and the verification step employees should use.",
            "Tailor guidance to roles. Finance staff need payment-verification procedures; executives need account-protection and impersonation examples; general staff need clear instructions for suspicious attachments, links, and lost devices. Keep the policy practical and easy to find."
          ]
        },
        {
          "heading": "Make reporting easy and safe",
          "body": [
            "Provide one clear reporting route, such as a mail-client button or known security contact. Tell staff what information to include and reassure them that quick reporting matters more than perfect diagnosis. If someone clicked or approved a prompt, encourage immediate disclosure; shame and delay give attackers more time.",
            "A report should create a response: acknowledge it, investigate when appropriate, and share a short lesson without exposing personal details. If employees never hear what happened after reporting, they may stop reporting."
          ]
        },
        {
          "heading": "Practice, measure, improve",
          "body": [
            "Use short, periodic refreshers and realistic exercises rather than one large annual session. Measure reporting rates, time to report, repeat friction points, and whether staff can find the procedure. Interpret simulation results carefully; a click rate alone does not show whether the team can identify and report an actual attack.",
            "When a test identifies confusion, improve the workflow, technical safeguards, or training. Repeatedly targeting the same individuals without fixing confusing processes may reduce trust instead of risk."
          ]
        },
        {
          "heading": "Training complements technical controls",
          "body": "Filtering, MFA, endpoint protection, least privilege, payment controls, and secure recovery reduce the number of incidents that depend on perfect human judgment. Review the program after incidents, staffing changes, new software, and changes to financial workflows. The goal is safer decisions and faster reporting, not blaming employees for sophisticated deception."
        }
      ],
      "takeaway": "Effective awareness training is role-specific, brief, supported by clear reporting, and measured by safer actions—not just quiz scores or simulation clicks."
  },
  "business-email-compromise": {
      "lead": "Business email compromise (BEC) is fraud that abuses trust in email or business workflows. A criminal may impersonate an executive, compromise a vendor’s mailbox, or quietly take over an employee account to redirect payments, change bank details, or obtain sensitive information. BEC may involve no malware at all.",
      "sections": [
        {
          "heading": "How the fraud happens",
          "body": [
            "In an impersonation scheme, an attacker sends a message that appears to come from a leader or vendor and asks for an urgent payment or confidential file. In an account takeover, criminals use stolen credentials or session access to monitor real conversations and time a convincing request. They may create mailbox rules that hide replies or send messages from a lookalike domain.",
            "Invoice fraud often targets the normal process: a supplier says its banking information has changed, or a fake invoice arrives during a busy period. The request can look routine, especially when it lands in an active thread."
          ]
        },
        {
          "heading": "Make payment changes hard to spoof",
          "body": [
            "Require out-of-band verification for new vendors, bank-detail changes, urgent wires, and changes to payroll information. Use a phone number already on file—not the number or link in the request—and require a second approver for high-risk payments. Establish a written callback procedure and never waive it solely because a request appears to come from an executive.",
            "Limit who can initiate and approve payments. Use unique accounts, MFA, and payment alerts. Train finance and operations staff to stop and verify changes, even when a senior person is applying pressure."
          ]
        },
        {
          "heading": "Protect email and identity",
          "body": [
            "Require MFA for email and administrative accounts, protect sign-in recovery, disable legacy authentication where feasible, and review unusual sign-ins. Keep endpoints and browsers updated. Configure email authentication records with qualified guidance, while understanding that these controls reduce some spoofing but do not stop a compromised legitimate mailbox.",
            "Monitor for unexpected forwarding rules, delegate access, suspicious inbox rules, and unusual OAuth app consent. Make it easy for employees to report suspicious messages."
          ]
        },
        {
          "heading": "If funds or access may be compromised",
          "body": "Contact the bank immediately if a payment was sent; fast recall attempts may matter. Notify the IT/security lead through a known channel. Preserve the message and payment records. The response team should secure the mailbox from a trusted device, revoke active sessions, reset credentials, inspect forwarding rules and access grants, and assess whether other accounts or data were exposed. Follow legal, insurance, and incident-response guidance."
        }
      ],
      "takeaway": "BEC succeeds by manipulating ordinary business trust. Verify payment and account changes using a known separate channel, use dual approval, and report suspected compromise immediately."
  },
  "why-antivirus-isnt-enough": {
      "lead": "Traditional antivirus is useful, but it is not a complete cybersecurity program. It can detect known malicious files and some suspicious behavior, yet many incidents begin with stolen credentials, abused legitimate tools, unpatched services, or a user persuaded to approve a fraudulent request.",
      "sections": [
        {
          "heading": "What antivirus does well",
          "body": [
            "Antivirus compares files and activity against known threat patterns and may block malware before it runs. Modern endpoint security products add behavior monitoring, cloud analysis, and response features. They are an important layer for laptops, desktops, and servers.",
            "The product still needs coverage, current policies, updates, alert review, and a clear response owner. An agent that is missing, disabled, outdated, or generating alerts nobody examines offers less protection than its dashboard suggests."
          ]
        },
        {
          "heading": "Where attackers work around it",
          "body": [
            "A criminal who signs in using a valid password may not need to drop a traditional virus. Attackers can exploit weak MFA, use remote-management tools already installed, abuse email forwarding, steal session tokens, or take advantage of an unpatched public-facing service. Business email compromise can move money without infecting a device at all.",
            "Ransomware operators may use legitimate administrative tools, disable security controls, or move laterally before encrypting systems. No single endpoint product can guarantee detection of every tactic or recover the business after an incident."
          ]
        },
        {
          "heading": "Build a layered baseline",
          "body": [
            "Protect identity with MFA, separate administrator accounts, least privilege, and prompt offboarding. Keep systems and applications patched, filter email, secure remote access, inventory devices, and monitor endpoint alerts. Protect backups with separate access and test restores. Train staff to verify sensitive financial changes through a trusted second channel.",
            "Define who investigates alerts, isolates a device, resets credentials, contacts leadership, and coordinates recovery. Practice the process. Include cloud accounts, network equipment, and third-party services in the security picture; endpoint protection alone may not cover them."
          ]
        },
        {
          "heading": "Check whether protection is working",
          "body": "Review endpoint coverage against the device inventory, confirm tamper protection and update status, identify alert ownership and escalation hours, and ask when the last incident-response exercise occurred. Look for unmanaged devices and repeated exceptions. The goal is a set of controls that work together and can be maintained—not the largest collection of security tools."
        }
      ],
      "takeaway": "Antivirus is an important control, but it cannot prevent every credential, cloud, or human-driven attack. Pair endpoint protection with identity security, patching, backups, monitoring, and a response plan."
  },
  "password-managers-small-teams": {
      "lead": "A password manager stores unique credentials in an encrypted vault so employees do not have to reuse passwords or keep them in spreadsheets, notes, or email. For a small team, it can also provide controlled sharing, offboarding, and visibility into important service accounts—but only when ownership and recovery are planned.",
      "sections": [
        {
          "heading": "Why a small team benefits",
          "body": [
            "When one password is reused across email, banking, vendors, and software, a breach at one site can expose others. A password manager generates long, unique passwords for each service and fills them into the intended site, reducing both reuse and typing errors.",
            "Teams also inherit credentials for firewalls, utilities, web hosting, social accounts, and vendor portals. A business vault can store shared credentials with access limited to the people who need them, instead of passing passwords through chats or keeping a file on a shared drive."
          ]
        },
        {
          "heading": "Choose based on business controls",
          "body": [
            "Evaluate MFA for the vault, encryption and recovery design, administrator controls, shared collections, audit history, secure sharing, device support, and how accounts are recovered if an owner leaves. Consider whether the product supports company-managed accounts rather than personal vaults employees own themselves.",
            "Decide how emergency access works and who controls the recovery method. A single person’s personal email or phone should not be the only way to restore company access. Use individual accounts for each employee so activity can be attributed and access revoked separately."
          ]
        },
        {
          "heading": "Roll out in manageable steps",
          "body": [
            "Start with administrators, finance, email recovery, network equipment, and key vendor accounts. Inventory where credentials currently live, change reused or exposed passwords, then store the new values in the managed vault. Enable MFA and train staff on approving vault prompts, sharing access, and reporting suspicious requests.",
            "Do not move passwords into a new system and assume the work is over. Remove old shared files and notes, rotate credentials for former employees or vendors, review access periodically, and document the emergency process. For systems that support passkeys or SSO, consider those options alongside password management."
          ]
        },
        {
          "heading": "Common mistakes to avoid",
          "body": "Avoid shared master logins, unprotected exports, storing the vault recovery key in the vault itself, and granting every user access to every collection. Confirm that emergency access is tested and that the business can retain control if the champion or administrator departs. A password manager is one part of identity security, alongside MFA, least privilege, patching, and account offboarding."
        }
      ],
      "takeaway": "A business password manager helps replace reuse and informal sharing with unique credentials and controlled access. Plan ownership, MFA, recovery, onboarding, and offboarding before rollout."
  },
  "first-hour-ransomware": {
      "lead": "If ransomware is suspected, the first hour is about containing spread, protecting evidence, and getting the right people involved—not rushing to pay or restore. Follow your incident response plan and make decisions with your IT/security provider, leadership, legal counsel, and insurer as appropriate.",
      "sections": [
        {
          "heading": "First minutes: alert and isolate carefully",
          "body": [
            "Report the event through your designated emergency channel. Identify affected devices, users, locations, and what you observed. If a workstation is actively encrypting files and your response plan permits it, disconnect it from Wi-Fi or the network to limit spread; do not power it off unless responders instruct you, because volatile evidence may be lost.",
            "Do not plug backup drives into an affected device, delete suspicious files, run cleanup tools, or reconnect systems simply to see if they work. Preserve the ransom note, alerts, timestamps, and screenshots where safe. Keep a written timeline of actions and observations."
          ]
        },
        {
          "heading": "First 15–30 minutes: activate response roles",
          "body": [
            "Contact the incident lead, IT/security provider, leadership, and the insurer’s breach hotline if your policy directs you to do so. Insurer policies may require approved vendors or prompt notice; check instructions before engaging outside responders if possible. Bring in qualified legal counsel to advise on legal obligations and communications.",
            "Use a trusted device and communication channel if email or collaboration accounts may be compromised. Identify who can authorize isolation, account resets, public communication, and recovery decisions. Avoid speculative statements about scope or attribution."
          ]
        },
        {
          "heading": "First hour: understand scope without destroying evidence",
          "body": [
            "Responders should determine whether the event is limited to one device or may involve identity systems, servers, cloud services, backups, remote access, or a third-party provider. Check for suspicious administrator activity, new accounts, altered mailbox rules, disabled security tools, and unusual data transfers, using appropriate logs and tools.",
            "Secure unaffected critical accounts from a clean device, prioritize administrator and remote access credentials, and revoke sessions or tokens as directed. Keep backup systems protected from the affected network. Do not begin a broad restore until responders have confidence that the threat is contained and recovery points are appropriate."
          ]
        },
        {
          "heading": "What leadership should avoid",
          "body": "Do not assume that paying guarantees decryption, prevents data disclosure, or restores trustworthy systems. Do not negotiate, make coverage decisions, or notify affected people without the responsible response, legal, and insurance guidance. Preserve evidence and decisions. The priorities are safe containment, accurate scope, continuity planning, and a controlled recovery."
        }
      ],
      "takeaway": "In the first hour, report, isolate affected systems as your response plan directs, preserve evidence, contact the response team and insurer, and protect backups. Avoid improvised cleanup or rushed restoration."
  },
  "mfa-app-text-key": {
      "lead": "Multifactor authentication (MFA) asks for another proof of identity beyond a password. That second factor may be an authenticator-app code, a push approval, a texted code, a hardware security key, or a passkey. They do not provide equal protection, and the best choice depends on the system, user risk, and recovery options.",
      "sections": [
        {
          "heading": "Text message codes",
          "body": [
            "A one-time code sent by SMS is substantially better than password-only sign-in, but it can be vulnerable to phone-number takeover, SIM swapping, message interception, or convincing a user to disclose the code. SMS may be a practical step for an account that offers no stronger option, but avoid treating it as the preferred method for administrators, finance, email, or remote access.",
            "Never tell a caller or email contact an MFA code. A legitimate support person should not need you to read out a login code to them."
          ]
        },
        {
          "heading": "Authenticator apps and push prompts",
          "body": [
            "An authenticator app generates time-based codes on a device. It is generally harder to intercept than SMS, but a user can still be tricked into typing a code into a fake site. Push notifications are convenient; attackers may exploit repeated prompts until someone approves one. Number matching and clear sign-in details help users distinguish a real request.",
            "Use app-based MFA broadly where practical, require users to deny and report unexpected prompts, and monitor repeated denials or unusual sign-ins. Protect recovery methods so a lost phone does not become a shortcut around MFA."
          ]
        },
        {
          "heading": "Hardware keys and passkeys",
          "body": [
            "A FIDO security key or passkey uses cryptography tied to the legitimate website or service. It is resistant to ordinary phishing because the credential is not a reusable code that can be typed into a fake page. Hardware keys can be especially useful for privileged users, though the organization must issue, inventory, and recover them.",
            "Support varies by service and device. Maintain a secure backup method and a documented process for replacement, lost devices, employee departure, and account recovery."
          ]
        },
        {
          "heading": "Choose and roll out the right factor",
          "body": "Prioritize email, administrator accounts, financial systems, VPN or remote access, and cloud consoles. Prefer passkeys or hardware keys for high-risk accounts, then authenticator apps with number matching where supported. Use SMS as a fallback where stronger methods are unavailable. Pilot the process, train staff, test account recovery, and ensure emergency administrators do not depend on one person’s phone."
        }
      ],
      "takeaway": "MFA methods vary in phishing resistance. Choose stronger factors for high-impact accounts, protect recovery paths, and treat an unexpected sign-in prompt as a possible attack."
  },
  "what-is-phishing": {
      "lead": "Phishing is a deceptive message or interaction designed to make someone reveal credentials, approve access, open a harmful file, or send money. It often arrives by email, but the same tactic appears in text messages, collaboration tools, voice calls, QR codes, and fake login pages. The message may be polished and may appear to come from a known person or service.",
      "sections": [
        {
          "heading": "How phishing reaches an inbox",
          "body": [
            "Attackers send messages that imitate vendors, executives, Microsoft 365, banks, delivery services, or coworkers. They create urgency—an invoice is overdue, a mailbox will close, a document needs review—and ask the recipient to click a link, open an attachment, sign in, or change payment details.",
            "Some messages come from compromised legitimate accounts, making sender names and ongoing email threads look authentic. A link can lead to a fake sign-in page that captures a password and MFA approval, while an attachment may exploit a vulnerability or persuade a user to run a file. Phishing can also start with a phone call that asks the target to complete a step on their computer."
          ]
        },
        {
          "heading": "Clues that deserve a pause",
          "body": [
            "Unexpected requests, unusual payment instructions, unfamiliar links, mismatched domains, pressure to keep a request secret, and messages that bypass normal approval processes should be verified. But spelling errors are not a reliable test: modern phishing can be well-written, personalized, and timed to a real business event.",
            "Look at the actual link destination before opening it, and do not approve an MFA prompt you did not initiate. For payment or bank-detail changes, verify through a known phone number or a separate trusted channel—not by replying to the same email."
          ]
        },
        {
          "heading": "What to do with a suspicious message",
          "body": [
            "Use the organization’s report-phishing option or send it to the designated security contact. Do not forward it broadly or click links to investigate. If you already entered a password, approved a prompt, opened a file, or sent money, report that immediately; speed gives the response team more options.",
            "IT staff should preserve the message and relevant sign-in details, reset affected credentials from a trusted device, revoke active sessions where appropriate, review mailbox rules and forwarding, and contact the bank quickly if funds may have moved. Follow the incident plan rather than improvising a cleanup that could erase evidence."
          ]
        },
        {
          "heading": "Reduce exposure without blaming users",
          "body": "Use MFA resistant to phishing where supported, secure email filtering, endpoint protection, prompt patching, and least-privilege access. Establish a simple reporting route and practice realistic examples with staff. Make verification normal for financial changes and sensitive requests. Training helps, but it should complement technical safeguards and a response process that treats reporting quickly as the right action."
        }
      ],
      "takeaway": "Phishing is a trust trick delivered through many channels. Pause on unusual requests, verify through a separate trusted route, and report mistakes quickly so the organization can contain the impact."
  },
  "switch-msps-without-downtime": {
      "lead": "Changing managed IT providers is a controlled handoff of access, documentation, monitoring, backups, vendor relationships, and open work. Downtime is avoidable when the transition is planned around business operations and both providers know who owns each step. Start early, keep executive oversight, and never assume critical credentials or recovery data will transfer automatically.",
      "sections": [
        {
          "heading": "Before giving notice",
          "body": [
            "Review the current agreement for notice periods, renewal dates, transition assistance, fees, data ownership, documentation, equipment, and access to backups. Identify the people authorized to approve the change and choose the incoming provider before ending the current relationship. If the organization has internal IT staff, assign a transition lead.",
            "Make a list of business-critical systems, locations, key vendors, recurring issues, scheduled changes, and upcoming deadlines. Record what cannot be interrupted, such as payroll, patient scheduling, production, or month-end accounting. Use this list to set transition windows and escalation contacts."
          ]
        },
        {
          "heading": "Create a written handoff plan",
          "body": [
            "Name an owner and due date for each workstream: administrator accounts, device-management agents, endpoint security, email and identity, network equipment, backups, domains and DNS, licensing, internet and voice vendors, documentation, and open support tickets. Track the current state, requested action, validation evidence, and escalation contact in one shared transition log.",
            "Plan for least-privilege access and secure transfer. Use a password vault or approved secure method rather than sending credentials in ordinary email. Confirm ownership and recovery methods for tenant-global accounts, domain registrars, firewall consoles, backup portals, and vendor billing. Do not remove the outgoing provider’s access until replacement monitoring and support are working, unless an immediate security concern requires a coordinated exception."
          ]
        },
        {
          "heading": "Protect continuity during cutover",
          "body": [
            "Schedule changes around business hours and critical dates. Agree on how users will request help during the transition and who handles urgent incidents. Avoid changing multiple major systems at once if that makes problems difficult to isolate. Before disabling old agents or access, confirm the incoming provider can monitor the devices, receive security alerts, and reach the systems it is contracted to support.",
            "Validate recovery before depending on it. Confirm the incoming team can access backup copies, understand retention and restore procedures, and perform an agreed test. Document any system that cannot be transferred, has an unknown owner, or depends on a third party. Test phones, remote access, email, line-of-business applications, and network connectivity after material changes."
          ]
        },
        {
          "heading": "Use the first 30 to 90 days well",
          "body": [
            "The new provider needs to learn the environment and validate what it inherited. Expect an inventory, documentation review, access cleanup, security baseline, backup review, open-issue list, and prioritized roadmap. Ask for brief status updates and make decisions about risk and budget promptly.",
            "Do not expect every legacy problem to disappear during onboarding. Agree on what is urgent, what is deferred, and how project work will be authorized. Measure whether users know how to get help, alerts reach an owner, and critical systems have tested recovery paths. Keep a record of unresolved dependencies and the person responsible for each."
          ]
        },
        {
          "heading": "A practical transition checklist",
          "body": "Confirm contract timing and leadership approval; choose the incoming provider; list critical systems and business blackout dates; name transition contacts; inventory credentials, vendors, backups, agents, and open issues; set secure handoff and cutover steps; test support and recovery; then review progress at 30, 60, and 90 days. If a provider relationship is contentious or access is disputed, involve appropriate legal counsel and avoid disrupting service without a continuity plan."
        }
      ],
      "takeaway": "A smooth MSP transition is planned, documented, and verified. Transfer access securely, overlap support where appropriate, test backups and monitoring, and assign an owner to every unresolved item."
  },
  "cyber-insurance-questionnaires": {
      "lead": "A cyber insurance questionnaire is the insurer’s snapshot of how your organization manages technology risk. Answers about multifactor authentication, backups, endpoint protection, patching, access, vendors, and incident response can affect eligibility, terms, or renewal. Treat each answer as a factual statement about the systems in scope—not as a goal or an assumption.",
      "sections": [
        {
          "heading": "What the insurer is trying to understand",
          "body": [
            "Applications commonly ask about your organization’s size, revenue, locations, data, cloud services, remote access, vendors, prior incidents, and security controls. The carrier is assessing exposure and whether required safeguards are present. The exact questions differ by insurer and policy, so use the current form and ask your licensed agent or broker how an answer affects coverage.",
            "Some questions are broad, while others have important qualifiers: all users or only administrators; all remote access or a particular platform; every endpoint or only company-owned devices; backups of which systems and how often. Read the full question and identify its population, time period, and meaning before responding."
          ]
        },
        {
          "heading": "Build an accurate answer with evidence",
          "body": [
            "Assign an owner for the application and gather input from IT, operations, finance, and leadership. For each control, record what is deployed, where it applies, how exceptions are handled, and what evidence supports the statement. Examples include MFA policy reports, endpoint inventory, patch status, backup logs, restore-test records, access reviews, and an incident-response contact list.",
            "Distinguish fully implemented from partially implemented or planned. A control active for office employees but absent for contractors is not necessarily an all-user control. A backup job reporting success is not the same as a recent restore test. If the answer is uncertain, investigate or ask the broker rather than guessing."
          ]
        },
        {
          "heading": "Common control areas to review",
          "body": [
            "Identity: MFA for email, remote access, administrators, and critical applications; separate admin accounts; prompt removal of former users. Devices: supported operating systems, patching cadence, endpoint security coverage, encryption, and alert ownership. Backups: covered systems, frequency, retention, separate credentials, offsite or immutable protection, and test restores.",
            "Operations: phishing reporting, payment-change verification, incident escalation, vendor dependencies, and recovery priorities. Document exceptions—for example, a legacy system that cannot support MFA—and explain compensating safeguards and a remediation owner. These details help the business understand risk even if the form only allows a yes-or-no response."
          ]
        },
        {
          "heading": "What to do when you find a gap",
          "body": [
            "Prioritize gaps by exposure and business impact. An unprotected administrator account, untested backup, or unmanaged remote access usually deserves faster attention than a low-impact policy-documentation issue. Create a short remediation list with an owner, target date, and proof of completion. Do not claim that a control is active until it is actually in place across the scope described.",
            "If a submitted answer changes during the policy term, contact your broker promptly to ask whether the insurer needs to be notified. Keep the application, supporting evidence, policy, endorsements, and correspondence together. At renewal, review prior answers against the current environment; do not copy forward statements without checking."
          ]
        },
        {
          "heading": "Separate technical guidance from insurance advice",
          "body": "Your IT provider can help inventory controls, gather technical evidence, explain deployment gaps, and implement agreed safeguards. A licensed insurance professional should interpret policy wording, advise on coverage and disclosures, and explain what the insurer requires. Honest, supported answers matter more than polished answers; an application is not a security certification, and no IT provider can promise a particular underwriting or claims outcome."
        }
      ],
      "takeaway": "Answer each questionnaire from current evidence. Confirm who and what each question covers, document exceptions, remediate gaps, and ask your broker about coverage or disclosure questions."
  },
  "break-fix-vs-managed": {
      "lead": "Break-fix IT means you call for help when something breaks and generally pay for the work performed. Managed IT is a recurring service relationship in which a provider supports users and maintains agreed parts of the environment. The choice is not simply hourly billing versus monthly billing; compare the total cost, risk, coverage, and operating model.",
      "sections": [
        {
          "heading": "What break-fix typically includes",
          "body": [
            "In a break-fix arrangement, the business contacts a technician for a specific problem. Charges may be hourly, per incident, or subject to a minimum. The arrangement can work when needs are rare, systems are simple, and the organization can tolerate delays or downtime. It may also suit a project that has a clear beginning and end.",
            "The tradeoff is that work may begin only after a problem appears. Preventive maintenance, documentation, cybersecurity monitoring, backup checks, and planning may not happen unless separately requested. The business may also need to coordinate software vendors, internet providers, and internal staff during an incident."
          ]
        },
        {
          "heading": "What managed services typically include",
          "body": [
            "A managed-services agreement usually provides a defined support channel and recurring oversight for specified users, devices, and systems. Depending on the contract, it may include monitoring, patching, endpoint protection, account administration, backup monitoring, vendor coordination, reporting, and technology planning. No two agreements are identical, so verify the actual service description and exclusions.",
            "Managed IT shifts some routine work into planned operations and gives the provider an ongoing relationship with the environment. That can improve continuity and make costs more predictable, but it does not mean every project, outage, security event, or third-party issue is included in the monthly fee."
          ]
        },
        {
          "heading": "Calculate the real cost of reactive support",
          "body": [
            "Review a full year of invoices, emergency visits, and recurring issues. Add internal time spent diagnosing problems, waiting for help, coordinating vendors, and rebuilding context for a technician who does not know the environment. Estimate the operational impact of outages using reasonable assumptions: affected employees, hours lost, missed appointments or orders, and recovery effort.",
            "Include costs that may be hidden until something goes wrong: unsupported equipment, overdue replacements, weak backup retention, security gaps, or missing documentation. Do not count every hypothetical incident as a guaranteed saving from managed service. Use a range and label assumptions so leadership can compare scenarios honestly."
          ]
        },
        {
          "heading": "Compare the agreement details",
          "body": [
            "For each model, identify who responds, during what hours, and what response targets mean. Confirm whether maintenance and security are covered, how after-hours and onsite service works, how projects are quoted, what third-party dependencies exist, and who is responsible for backups and restores. Check contract terms, annual increases, minimum charges, and transition responsibilities.",
            "Ask a managed provider to explain onboarding: inventory, administrator access, documentation, backup validation, security baseline, open issues, and the first roadmap. Ask a break-fix provider what preventive work is available and how the business will keep records current."
          ]
        },
        {
          "heading": "Which approach fits",
          "body": "Break-fix can make sense for organizations with very low support needs and the capacity to accept irregular costs. Managed service can fit teams that depend on technology daily and want consistent support, maintenance, and planning. A hybrid or co-managed model may fit a business with internal IT staff that needs extra coverage or specialized security help. Compare actual workload and risk; the right model is the one that makes responsibilities and tradeoffs clear."
        }
      ],
      "takeaway": "Break-fix pays for response after an issue; managed service funds an agreed, ongoing support and maintenance model. Compare total cost, prevention, coverage, and accountability against the needs of your business."
  },
  "managed-it-cost-per-user": {
      "lead": "Managed IT is commonly priced per user, per device, or as a flat monthly agreement, but the monthly rate alone does not tell you what the service will cost or whether it fits. A useful comparison starts with scope: what people, devices, locations, security services, support hours, and projects are included, and which costs remain separate.",
      "sections": [
        {
          "heading": "How per-user pricing works",
          "body": [
            "A provider sets a monthly price for each supported employee or user. The bundle may include helpdesk support, endpoint monitoring, patching, Microsoft 365 administration, and security tools. The definition of a user matters: a full-time employee with a laptop and phone may be treated differently from a seasonal worker, shared workstation, contractor, or mailbox-only account.",
            "Per-user pricing can make budgeting easier when staffing is stable, but confirm whether accounts are billed even when inactive, how new hires and departures are handled, and whether multiple devices per person are included. Ask how the provider treats servers, network equipment, conference rooms, shared devices, and business applications."
          ]
        },
        {
          "heading": "What makes the price change",
          "body": [
            "Price reflects service coverage and the work required to support the environment. After-hours response, onsite visits, multiple locations, complex line-of-business systems, compliance needs, legacy equipment, and a high volume of unmanaged devices can affect scope. Security services such as managed detection, email protection, identity controls, backup, and security awareness may be included, optional, or contracted separately.",
            "Licenses and consumption charges are another common source of variation. Microsoft 365 subscriptions, backup storage, internet circuits, hardware, project labor, and third-party software may not be part of a managed-services fee. The proposal should distinguish recurring service from pass-through licensing and one-time projects."
          ]
        },
        {
          "heading": "Build an apples-to-apples comparison",
          "body": [
            "Ask each provider to state the monthly fee, billing unit, included users and devices, minimums, service hours, response commitments, onsite approach, and exclusions. Request a line-item list of security, backup, licensing, project, and after-hours charges. Clarify whether response targets mean acknowledgement or resolution; these are different measures.",
            "Then compare the quoted scope with your current total cost: invoices, emergency labor, internal employee time spent coordinating vendors, productivity lost while systems are down, and deferred maintenance. Avoid assuming that all downtime can be eliminated or that every benefit has a precise dollar value. Instead, note the business impact and the assumptions behind your estimate."
          ]
        },
        {
          "heading": "Questions to ask before signing",
          "body": [
            "Who is covered by the monthly price, and how are changes in headcount reconciled? Which devices and locations are managed? What does the helpdesk cover, and what is considered a project? Are endpoint security, MFA administration, backup monitoring, recovery tests, vendor coordination, and technology planning included? How are after-hours and onsite requests billed? What are the term, renewal, price-change, and transition provisions?",
            "Ask for a sample service report and a description of onboarding. A transparent proposal explains responsibilities and dependencies instead of relying on a low headline price. Make sure the agreement says who owns the data, administrator accounts, documentation, and backups if you leave."
          ]
        },
        {
          "heading": "Choosing for value",
          "body": "The lowest monthly price may leave important work outside the agreement; the most expensive offer may include services your organization does not need. Choose a provider whose scope matches your risk, support needs, and internal capacity. For a small business, predictable access to experienced support, consistent maintenance, clearer accountability, and a practical improvement plan can be more valuable than a bare per-user rate. Revisit the comparison when your workforce, locations, or systems change."
        }
      ],
      "takeaway": "Compare the complete scope and excluded costs, not just the per-user number. The right proposal makes clear who is supported, what is included, what costs extra, and who owns the next step."
  },
  "three-two-one-backup": {
    lead: "The 3-2-1 backup rule is a practical starting point for protecting business data: keep at least three copies, store them on two different types of storage, and keep one copy offsite. The goal is to avoid a single device failure, mistake, cyberattack, or building disaster taking out every usable copy. The rule only helps when the copies are independent, protected, and regularly tested.",
    sections: [
      { heading: "Three copies: count recoverable copies, not icons in a dashboard", body: ["Count the live data plus at least two backup copies. For example, a small firm might keep its working files on a server, a separate backup on a local appliance, and a third copy in a cloud backup service. Each copy should have a clear recovery path.", "Synchronization is not always backup. Sync tools are designed to mirror changes, which is useful for collaboration. But if a user deletes a folder, malware encrypts files, or an attacker changes data, synchronization may replicate that damage. Check version history and retention, but do not assume a synced folder alone provides an independent recovery copy.", "Decide which information is truly business critical: accounting, client or patient records, shared files, line-of-business databases, email, and system configurations may each need different protection. Make sure the chosen backup actually includes the data and that its retention period covers how far back you may need to recover."] },
      { heading: "Two types of storage: reduce shared failure risks", body: ["Use at least two different storage types or systems so one defect is less likely to affect every copy. A local backup device can make a large restore faster. A cloud repository can provide geographic separation and protect against a building-level event. Other combinations may fit your organization better; compare recovery speed, capacity, cost, and administration.", "Two copies on the same server, disk array, administrator account, or network may share the same point of failure. Ransomware that reaches the production network might also reach a permanently connected backup appliance. A stolen administrator password might expose both production systems and cloud backups if permissions are shared. Separation should be technical as well as physical."] },
      { heading: "One copy offsite: survive a local disaster", body: ["Keep at least one copy away from the place where the original data lives. A fire, flood, theft, power event, or other site-wide incident can destroy nearby equipment together. Cloud backup is a common offsite option; a second secure facility or rotated offline media can also work when managed carefully.", "Offsite does not automatically mean protected. Use multifactor authentication and unique, restricted backup credentials. Limit who can delete recovery points, and consider immutable retention or an offline copy that cannot be modified from the normal business network. Understand the provider’s retention, encryption, restore procedure, and support process before relying on it."] },
      { heading: "A stronger version: 3-2-1-1-0", body: ["Many organizations extend the rule to 3-2-1-1-0: keep three copies, use two storage types, keep one offsite, keep one copy offline or immutable, and aim for zero unverified backup errors. This adds protection against an attacker who obtains administrator access and tries to destroy connected backups.", "The extra copy is useful only if someone monitors it and tests recovery. A successful job notification is not proof that the needed files are complete, uncorrupted, or restorable. Treat failed jobs and unexplained gaps as operational issues with an assigned owner."] },
      { heading: "Test restores and set recovery targets", body: ["Choose recovery point objectives (RPO) and recovery time objectives (RTO) for important systems. RPO describes how much recent work the organization can afford to lose; RTO describes how long it can operate without a system. A daily backup may be sufficient for some shared files but too infrequent for a database that changes throughout the day. A recovery that takes several days may not meet the needs of scheduling, billing, or production.", "Test by restoring representative files and, for critical systems, practicing a full recovery in an isolated environment. Confirm that files open, permissions are usable, applications function, and the responsible people know the steps. Record how long restoration takes and what was missing. Repeat after major system changes and on a regular schedule.", "Include more than data files. Recovery may depend on identity accounts, encryption keys, software licenses, network settings, vendor contacts, and administrator access. Keep emergency instructions somewhere available if email or the primary network is down."] },
      { heading: "A practical backup review for a small business", body: ["Start with a short inventory of systems and data, who owns each one, and how much interruption the business can tolerate. For every item, write down the backup location, frequency, retention, encryption, account protection, and last successful restore test. Ask whether a compromised everyday administrator could delete every copy.", "Prioritize the biggest gaps: missing systems, backups that share credentials with production, no offsite or immutable copy, failed jobs nobody reviews, and restores that have never been tested. Assign owners and dates, then run a restore exercise before declaring the gap closed. For regulated or contract-bound data, confirm retention and recovery requirements with the appropriate compliance, legal, and business advisors.", "During a suspected ransomware incident, avoid casually reconnecting backup systems or overwriting recovery points. Follow your incident response plan, preserve evidence, and coordinate with your IT and security providers before choosing what to restore. The cleanest recovery point matters more than the newest one."] },
      { heading: "How Mission can help", body: "Mission can review what data and systems your organization depends on, map existing backup coverage, identify shared access or retention risks, and help plan restore tests. We can help document recovery responsibilities and prioritize improvements around operational impact. Your organization remains responsible for deciding acceptable downtime and data loss, and specialized regulatory or contractual requirements should be reviewed with qualified advisors." }
    ],
    takeaway: "The 3-2-1 rule is about independent, recoverable copies: three copies, two storage types, and one offsite. Add restricted or immutable protection, monitor backup health, and prove the process with restore tests."
  },
  "cyber-insurance-small-business": {
    "lead": "A cyber incident can create expenses well beyond the cost of repairing a computer. For a small business, clinic, professional practice, or nonprofit, a compromised mailbox or unavailable line-of-business system can mean forensic work, legal questions, lost operating time, customer communication, and pressure to restore service quickly. Cyber insurance may help absorb some covered costs and connect an organization with response resources. It is a financial risk-transfer tool, not a security product, a guarantee of payment, or a substitute for a recovery plan. The useful question is not simply whether you have a policy. It is whether its coverage, limits, conditions, and required controls fit the way your organization actually operates.",
    "sections": [
      {
        "heading": "What cyber insurance is designed to do",
        "body": [
          "Cyber insurance is business insurance for certain losses tied to covered technology, privacy, network-security, or data incidents. Depending on its wording, a policy can combine first-party coverage for the insured organization’s own response and interruption costs with third-party coverage for claims made by customers, patients, employees, vendors, or other affected parties. Policies may be standalone, or cyber coverage may be added as an endorsement to another policy. The label alone does not tell you how broad that protection is.",
          "Think of the policy as one part of a response plan. It may help fund specific costs after a covered event, but it does not prevent account takeover, restore every lost dollar, or remove an organization’s obligations to clients and regulators. Insurers and forms differ, so use your actual policy and a licensed insurance professional to determine what applies to your business."
        ],
        "sources": [
          {
            "label": "Indiana Cyber Insurance Toolkit",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/"
          },
          {
            "label": "NAIC 2026 Report on the Cybersecurity Insurance Market",
            "href": "https://content.naic.org/resource-center/2026-report-cybersecurity-insurance-market"
          }
        ]
      },
      {
        "heading": "What a policy may cover",
        "body": [
          "First-party coverage may help pay eligible costs that your organization incurs responding to an incident. Common examples can include forensic investigation to understand what happened, legal counsel and breach-response coordination, required notification, call-center or credit-monitoring services where appropriate, data or system restoration, crisis communications, and certain extra expenses or lost income while operations are interrupted. Some policies also address cyber extortion or ransomware events, subject to the wording, conditions, limits, and applicable law.",
          "Third-party coverage may help with covered claims alleging that a security failure or privacy event harmed someone else. Depending on the form, this could include defense costs, settlements, or judgments related to unauthorized disclosure, failure to protect information, or certain network-security events. A business that handles patient records, payroll, payment data, student information, or customer accounts should understand how its policy treats the information it holds and the role of outside service providers.",
          "These are examples, not promises. A policy may define a covered event narrowly, put a smaller sublimit on a particular service, require insurer approval before a vendor is engaged, or exclude an incident type. Social-engineering scams, fraudulent funds transfers, vendor outages, hardware failure, intellectual-property disputes, and ordinary technology upgrades may be treated differently from a network breach. Ask your broker to point to the exact section that answers each question."
        ],
        "sources": [
          {
            "label": "Indiana Cyber Insurance Toolkit FAQ",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/cyber-insurance-toolkit-faq/"
          },
          {
            "label": "NAIC 2026 Report on the Cybersecurity Insurance Market",
            "href": "https://content.naic.org/resource-center/2026-report-cybersecurity-insurance-market"
          }
        ]
      },
      {
        "heading": "What to check in the policy—not just the declarations page",
        "body": [
          "The declarations page shows important numbers, but the policy wording explains when those numbers can be used. Review the total limit and any sublimits; the deductible or self-insured retention; waiting periods for business interruption; how the policy defines a security or privacy event; and whether lost income must follow a particular kind of interruption. Check whether an outage at a cloud, telecom, payroll, or other critical provider can trigger dependent-business-interruption protection, and what proof or waiting period applies.",
          "Ask whether ransomware, cyber extortion, social engineering, funds-transfer fraud, and invoice manipulation are covered, excluded, or limited, and whether each requires a separate endorsement. Clarify how the policy treats an incident involving a vendor or cloud platform, what breach-response providers you are expected to use, and how quickly you must report a suspected event. Some policies are written on a claims-made basis or include specific reporting conditions; your agent or broker can explain the effect of those terms for your situation.",
          "Also review exclusions, conditions, territory, policy dates, retroactive dates if applicable, and coordination with crime, property, professional-liability, and general-liability coverage. Do not assume two policies work together or that one policy fills a gap in another. Ask the broker to explain a realistic example, such as a staff member approving a fraudulent wire after an email account is compromised, or a ransomware incident that takes your scheduling system offline."
        ],
        "sources": [
          {
            "label": "NAIC 2026 Report: coverage gaps and policy questions",
            "href": "https://content.naic.org/resource-center/2026-report-cybersecurity-insurance-market"
          },
          {
            "label": "Indiana Cyber Insurance Toolkit",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/"
          }
        ]
      },
      {
        "heading": "What underwriting and renewal entail",
        "body": [
          "When you apply or renew, the insurer is trying to understand your organization’s risk and whether its controls meet the insurer’s eligibility and pricing criteria. The application may ask about revenue, employee count, locations, sensitive records, cloud and remote access, payment workflows, prior incidents, vendors, and the safeguards protecting accounts and devices. A longer form is not necessarily a better policy, and a short form does not remove the need to understand the resulting coverage.",
          "Questions often ask whether multifactor authentication is enabled, how endpoints are protected, how software is patched, how backups are isolated and tested, how privileged accounts are controlled, and whether the organization has an incident-response plan. The exact questions and required answers change by carrier and policy. An answer should describe what is actually in place across the organization—not what is planned, partly deployed, or true only for a subset of systems.",
          "Treat the application as a point-in-time statement that needs ownership. Assign someone to gather evidence from IT, operations, finance, and leadership. Keep the submitted copy, supporting evidence, quote, endorsements, and final policy together. If a material change occurs during the policy term, ask your broker whether and how it should be reported. At renewal, revisit the answers rather than reusing last year’s form without checking."
        ],
        "sources": [
          {
            "label": "Indiana Cyber Insurance Toolkit and underwriting questions",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/"
          },
          {
            "label": "CISA guidance for MSPs and small and mid-sized businesses",
            "href": "https://www.cisa.gov/sites/default/files/publications/CISA%20Insights_Guidance-for-MSPs-and-Small-and-Mid-sized-Businesses_S508C.pdf"
          }
        ]
      },
      {
        "heading": "The controls that make an organization more prepared",
        "body": [
          "The same practical safeguards that reduce everyday cyber risk also make it easier to give accurate underwriting answers. Start with identity: require MFA for email, remote access, administrators, and other important systems; remove old accounts promptly; and limit administrator access to people and tasks that need it. Protect laptops and servers with supported endpoint security, timely operating-system and application updates, disk encryption where appropriate, and alert review that has a named owner.",
          "Backups deserve special attention. Confirm that important data and configurations are included, that backup access is protected separately, and that a copy cannot simply be erased by an attacker using a compromised administrator account. Test a restore—not just the job report—and write down how long restoration took and what had to be done. CISA’s small and mid-sized business guidance specifically emphasizes MFA and backups that are protected from the organization’s network.",
          "Then look at email and business processes. Train staff to report suspicious messages, use a second verification channel before changing payment instructions, and make sure finance knows who to call when a wire or bank-detail request feels unusual. Document key systems, vendors, incident contacts, and recovery priorities. A control that is installed but unmonitored, inconsistently applied, or unknown to staff may not perform as expected during a real event."
        ],
        "sources": [
          {
            "label": "CISA guidance for MSPs and small and mid-sized businesses",
            "href": "https://www.cisa.gov/sites/default/files/publications/CISA%20Insights_Guidance-for-MSPs-and-Small-and-Mid-sized-Businesses_S508C.pdf"
          },
          {
            "label": "CISA StopRansomware Guide",
            "href": "https://www.cisa.gov/stopransomware/ransomware-guide"
          }
        ]
      },
      {
        "heading": "How Mission helps align IT with the policy",
        "body": [
          "Mission can help translate a carrier’s technical questions into a practical picture of your environment. We can review the application with your team, identify which accounts, devices, locations, and services each answer refers to, and help gather evidence such as MFA coverage, endpoint status, backup scope, restore-test results, patching reports, and incident-response documentation. That makes it easier to spot the difference between a control that is fully deployed and one that still has gaps.",
          "If we find a gap, we can help prioritize it by business impact and work with you on a remediation plan. Depending on your environment, that may mean rolling out MFA more consistently, closing unmanaged-device gaps, improving backup isolation and recovery testing, tightening administrative access, documenting vendor dependencies, or clarifying who responds when an alert arrives. The goal is a security program that works day to day and can be explained clearly at renewal—not a last-minute checkbox exercise.",
          "Our role is the technology and operational side. Your licensed insurance agent or broker should interpret coverage language, explain exclusions and limits, recommend policy options, and advise how to complete or amend an application. Mission cannot promise that a control will qualify you for coverage, lower a premium, or cause a future claim to be paid. The insurer makes underwriting and claim decisions under the policy."
        ],
        "sources": [
          {
            "label": "Indiana Cyber Insurance Toolkit",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/"
          }
        ]
      },
      {
        "heading": "Why it can be valuable for a small business or practice",
        "body": [
          "A smaller organization may have fewer internal specialists to investigate a breach, restore systems, coordinate legal advice, communicate with affected people, and keep daily work moving at the same time. A suitable policy may provide a source of funding for certain covered response costs and access to a defined response process. That can matter to a medical, dental, therapy, accounting, legal, or other professional practice whose work depends on timely access to records, scheduling, billing, email, and trusted client relationships.",
          "For a small or mid-sized business, even a short outage can interrupt sales, payroll, delivery, and customer service. For a practice, an unavailable scheduling or record system may affect appointments and the staff’s ability to serve people. Cyber coverage can be one way to plan for eligible incident expenses and some interruption losses, while the organization preserves cash for payroll, vendors, and recovery. The value depends on the actual policy, the organization’s exposures, and the costs it could absorb itself.",
          "Insurance is most useful when paired with prevention and recovery. Strong controls reduce the chance and impact of incidents; tested recovery limits downtime; clear policy terms help the organization know which response expenses might qualify. A policy with a large headline limit can still be a poor fit if key events are excluded, relevant sublimits are too low, or required controls do not match reality. The right conversation balances realistic risk, budget, coverage, and the ability to recover."
        ],
        "sources": [
          {
            "label": "NAIC 2026 Report on the Cybersecurity Insurance Market",
            "href": "https://content.naic.org/resource-center/2026-report-cybersecurity-insurance-market"
          },
          {
            "label": "Indiana Cyber Insurance Toolkit FAQ",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/cyber-insurance-toolkit-faq/"
          }
        ]
      },
      {
        "heading": "A practical plan before your next renewal",
        "body": [
          "Start by asking your broker for the current application, quote, declarations, policy form, endorsements, and any security requirements. Have leadership identify the systems and information that must be available to serve clients and keep the business operating. Then map the application questions to evidence: where MFA is on, which devices report to endpoint security, how patching is tracked, what backups include, and when the most recent restore test succeeded.",
          "Create a short gap list with an owner and target date. Address the highest-impact issues first, track which answers change after remediation, and keep documentation where the people who handle renewal can find it. Ask your broker to explain key exclusions, waiting periods, sublimits, reporting deadlines, and whether cyber coverage coordinates with other policies. Schedule the review early enough to resolve questions before the renewal deadline.",
          "If an incident occurs, use the insurer’s reporting instructions and breach hotline shown in your policy, and coordinate with your IT provider, leadership, and legal counsel. Before hiring a vendor, paying a ransom, or making a coverage assumption, check the policy’s instructions and get guidance from the insurer and broker. Preserving evidence and keeping a clear timeline can help the response team understand what happened."
        ],
        "sources": [
          {
            "label": "Indiana Cyber Insurance Toolkit",
            "href": "https://www.in.gov/cybersecurity/education/cyber-law-and-insurance/cyber-insurance-toolkit/"
          },
          {
            "label": "NAIC: questions to ask before buying cyber insurance",
            "href": "https://content.naic.org/resource-center/2026-report-cybersecurity-insurance-market"
          }
        ]
      }
    ],
    "takeaway": "Cyber insurance can help with specific covered losses, but good outcomes depend on a policy that fits your risks, accurate applications, practical security controls, and a response plan people can follow."
  },
  "physical-security-cybersecurity": {
    lead: "Cybersecurity does not stop at the login screen. A stolen badge, unlocked network closet, or exposed camera controller can give an intruder a path to the same systems protected by passwords and firewalls.",
    sections: [
      { heading: "The physical attack surface", body: "Server rooms, wiring closets, laptops, printers, access controllers, and cameras all hold information or provide a route into the environment. If they are easy to reach, digital controls may be bypassed entirely." },
      { heading: "Connect the controls", body: "Physical security and cybersecurity work best together: access permissions should match identity roles, devices should be patched and monitored, and camera footage should support investigations when an account or facility is compromised." },
      { heading: "Make it part of the routine", body: "Review badge access, visitor processes, equipment locations, privacy zones, and incident contacts alongside MFA, endpoint security, and backups. The goal is one risk picture, not separate checklists owned by disconnected teams." },
    ],
    takeaway: "A secure organization protects the places, devices, people, and accounts that make its technology possible.",
  },
  "security-baseline": {
    lead: "A practical security baseline is the collection of everyday controls that makes a business harder to compromise and easier to recover. It is not a single product. It is a repeatable way to protect identities, devices, information, and operations.",
    sections: [
      { heading: "Start with identity", body: "Most business systems are reached through an account, so identity deserves first priority. Multifactor authentication, separate administrator accounts, sensible permissions, and prompt offboarding prevent one stolen password from becoming unrestricted access." },
      { heading: "Protect and maintain every endpoint", body: "Laptops and desktops should be encrypted, patched, monitored, and protected by modern endpoint detection. Consistency matters more than a perfect tool: unmanaged exceptions are where preventable incidents often begin." },
      { heading: "Prepare to recover", body: "Backups only become dependable after a successful restore test. Pair tested recovery with a written incident plan so people know who isolates a device, who contacts leadership, and how customers or partners are informed." },
    ],
    takeaway: "Security improves fastest when a short list of controls is owned, measured, and reviewed regularly.",
  },
  "microsoft-365-setup": {
    lead: "Microsoft 365 can be a clean, secure operating system for a business, or a maze of duplicate files, abandoned Teams, and confusing permissions. The difference is usually governance, not licensing.",
    sections: [
      { heading: "Give information a clear home", body: "Teams, SharePoint, and OneDrive solve different problems. Define where departmental files, collaborative work, and personal drafts belong so employees do not create a new storage pattern for every project." },
      { heading: "Design access intentionally", body: "Standardize multifactor authentication, guest access, sharing rules, and administrator roles. Access should follow the person’s job and device health rather than depending on someone remembering to remove permissions later." },
      { heading: "Make adoption part of the setup", body: "A technically correct environment still fails when users do not understand it. Short, role-based guidance for file sharing, Teams, mobile access, and suspicious-message reporting creates far more value than a long generic manual." },
    ],
    takeaway: "A calmer Microsoft 365 environment has clear ownership, predictable places for information, and security that follows the user.",
  },
  "proactive-it": {
    lead: "Proactive IT is the work that happens before someone submits a ticket. It reduces recurring problems, makes spending more predictable, and gives leadership a clearer view of risk and opportunity.",
    sections: [
      { heading: "Know what you support", body: "Accurate inventories, diagrams, warranty dates, vendor contacts, and account ownership turn troubleshooting into a process instead of a scavenger hunt. Documentation also prevents the business from depending on one person’s memory." },
      { heading: "Find patterns, not just tickets", body: "A good support team looks beyond resolution time. Repeated password resets, unstable wireless, and recurring application failures are signals that a permanent fix or training change is needed." },
      { heading: "Connect maintenance to a roadmap", body: "Patching and monitoring protect today. Lifecycle planning, budgeting, and quarterly priorities prepare for tomorrow. Both belong in a managed IT relationship." },
    ],
    takeaway: "The goal is not zero tickets. It is fewer surprises, faster recovery, and technology that supports the business plan.",
  },
  "physical-security": {
    lead: "Modern cameras and access control work best as one connected security layer. The design should begin with people, doors, workflows, and response expectations, not a catalog of devices.",
    sections: [
      { heading: "Design around real events", body: "Map entrances, deliveries, cash handling, sensitive areas, and after-hours activity. Each camera and controlled door should answer a specific operational or security question." },
      { heading: "Build the supporting infrastructure", body: "Camera quality depends on lighting, placement, bandwidth, PoE capacity, storage, and retention. Access control depends on reliable power, door hardware, credentials, schedules, and safe emergency behavior." },
      { heading: "Plan ownership and response", body: "Decide who can view footage, approve access, investigate alerts, and preserve evidence. Technology is only useful when the organization has a clear process for acting on what it reports." },
    ],
    takeaway: "A strong physical security system combines thoughtful coverage, reliable infrastructure, and an operating procedure people can follow.",
  },
  "network-closet": {
    lead: "The network closet is the physical center of nearly every digital service in a building. A clean, documented room saves support time, reduces outages, and makes future projects safer.",
    sections: [
      { heading: "Make every connection traceable", body: "Label both ends of cables, maintain a port map, and remove abandoned runs. Neat patching is not cosmetic; it lets technicians isolate problems without disconnecting the wrong system." },
      { heading: "Protect power and environment", body: "Switches, firewalls, and controllers need appropriate UPS capacity, cooling, grounding, and restricted physical access. Heat and poor power quietly shorten equipment life." },
      { heading: "Leave room for what comes next", body: "Document uplinks, VLANs, fiber, wireless, cameras, and rack capacity. Growth space and tested cabling prevent a routine expansion from becoming an emergency rebuild." },
    ],
    takeaway: "A healthy closet should be understandable to a qualified technician who has never seen it before.",
  },
  "90-day-plan": {
    lead: "A 90-day technology plan turns an overwhelming list into a small number of outcomes the business can actually finish. It is long enough to make meaningful progress and short enough to maintain urgency.",
    sections: [
      { heading: "Separate risk from irritation", body: "An unstable backup, exposed administrator account, or unsupported server deserves different treatment than a slow printer. Rank issues by business impact, likelihood, and recovery difficulty." },
      { heading: "Choose three measurable outcomes", body: "Limit the quarter to a few priorities such as enabling MFA, replacing an aging firewall, or documenting recovery. Give each outcome an owner, budget range, and definition of done." },
      { heading: "Review and reset", body: "At the end of the period, measure what changed, capture new risks, and move unfinished work deliberately. A roadmap is useful because it evolves, not because the first version was perfect." },
    ],
    takeaway: "A credible plan explains what happens now, what waits, who owns it, and why that order makes sense.",
  },
  "intune-business": {
    lead: "Microsoft Intune gives a business a consistent way to configure, secure, and support devices wherever employees work. It replaces one-off setup decisions with policies that can be measured and repeated.",
    sections: [
      { heading: "Make device health visible", body: "Enrollment creates an inventory of ownership, operating system, encryption, updates, and compliance. IT can see which devices meet expectations instead of relying on assumptions." },
      { heading: "Apply standards consistently", body: "Intune can enforce screen locks, encryption, update policies, approved applications, and security settings. New devices receive the same baseline without a technician rebuilding the process by hand." },
      { heading: "Connect devices to identity", body: "Combined with Entra ID and conditional access, Intune can restrict sensitive resources when a device is outdated, unencrypted, or otherwise risky. This is especially valuable for hybrid work and mobile access." },
    ],
    takeaway: "Intune matters because it turns device management into an enforceable business policy rather than a collection of best intentions.",
  },
  "more-than-helpdesk": {
    lead: "A helpdesk solves visible problems. A strong IT firm also works on the less visible systems that prevent those problems, protect the organization, and help leadership plan.",
    sections: [
      { heading: "Support is the front door", body: "Fast, thoughtful user support matters, but ticket resolution is only one measure. The provider should also review patterns, improve documentation, manage vendors, and remove recurring sources of frustration." },
      { heading: "Prevention is part of the service", body: "Monitoring, patching, backups, identity controls, lifecycle management, and incident preparation reduce the number and severity of emergencies. These activities should be scheduled and reported, not performed only after a failure." },
      { heading: "Strategy connects IT to the business", body: "Roadmap meetings should translate technical issues into timing, cost, risk, and business outcomes. The goal is to help leadership make informed decisions before a renewal, expansion, or crisis forces the issue." },
    ],
    takeaway: "The right IT firm supports users today while steadily improving the environment they will depend on tomorrow.",
  },
  "edr-and-mdr": {
    lead: "EDR and MDR are related security layers. EDR provides the technology that records and responds to suspicious endpoint behavior. MDR adds people who monitor those signals, investigate them, and help contain real threats.",
    sections: [
      { heading: "What EDR sees", body: "Endpoint detection and response watches processes, files, logins, network connections, and behavior on supported devices. It can block known threats and isolate a machine when activity looks dangerous." },
      { heading: "What MDR adds", body: "A detection tool can produce more alerts than a small team can evaluate. Managed detection and response adds security analysts, escalation procedures, threat hunting, and human judgment around what requires action." },
      { heading: "Why both need a response plan", body: "Detection is not recovery. The business still needs clear authority to isolate devices, reset accounts, communicate internally, involve legal or insurance resources, and restore operations." },
    ],
    takeaway: "EDR supplies visibility and response technology; MDR supplies continuous attention and security expertise.",
  },
  "unique-passwords": {
    lead: "A unique password prevents a breach at one website from becoming access to every other account. It is one of the simplest ways to stop credential stuffing and limit the damage of stolen login data.",
    sections: [
      { heading: "Why reuse is dangerous", body: "Attackers routinely test stolen email-and-password combinations against Microsoft 365, banking, payroll, and other popular services. A reused password turns an unrelated breach into a business incident." },
      { heading: "Use a password manager", body: "A reputable password manager creates and stores long, random passwords so people do not need to memorize them. Shared business credentials can be controlled and revoked without sending passwords through email or chat." },
      { heading: "Add another layer", body: "Multifactor authentication helps when a password is exposed, but it does not make weak password habits harmless. Use unique passwords, MFA, and individual accounts together." },
    ],
    takeaway: "The only password worth memorizing is a strong master passphrase; the rest should be unique and securely managed.",
  },
  "passkeys": {
    lead: "Passkeys replace typed passwords with a cryptographic credential stored on a trusted device or password manager. People sign in using a fingerprint, face, or device PIN, and the secret itself is not sent to the website.",
    sections: [
      { heading: "Why passkeys resist phishing", body: "A passkey is tied to the legitimate website. A convincing fake login page cannot capture a reusable password because there is no shared secret for the user to type or reveal." },
      { heading: "What the user experiences", body: "Signing in usually looks like unlocking a phone or computer. Depending on the platform, passkeys can synchronize securely across a person’s devices or be stored on a hardware security key." },
      { heading: "Adopt them thoughtfully", body: "Start with important services that support passkeys, maintain secure recovery methods, and document offboarding. During the transition, keep strong MFA and password-management practices in place for systems that still require passwords." },
    ],
    takeaway: "Passkeys make strong authentication easier for users while removing the phishable password from the sign-in flow.",
  },
};

function defaultArticle(guide: Guide) {
  if (guide.category === "Local resources") {
    return {
      lead: guide.intro,
      sections: [
        { heading: "Local context changes the answer", body: "Indiana businesses do not all have the same provider availability, building layouts, workforce patterns, or response needs. A useful technology plan starts with the exact address, the systems the organization depends on, and the people responsible for acting when something goes wrong." },
        { heading: "Look beyond the monthly service", body: "When comparing providers or resources, evaluate response coverage, internet resilience, Microsoft 365 and endpoint support, cybersecurity, backup recovery, and documentation. A lower headline price can become expensive if a business still has to coordinate every vendor or emergency." },
        { heading: "Build a practical local plan", body: "Begin with a short discovery conversation, verify what is available at each location, and prioritize the improvements that reduce operational risk first. The right partner should be able to support remote work while still providing local context and onsite coordination when the situation calls for it." },
      ],
      takeaway: "Use the local checklist below to turn community-specific conditions into a clear, supportable technology plan.",
    };
  }
  return {
    lead: guide.intro,
    sections: [
      { heading: "Why this matters", body: "Technology decisions become easier when the organization understands the business impact, the people involved, and the risk of leaving the issue unresolved." },
      { heading: "Build a repeatable approach", body: "Document the current state, assign ownership, and define what a successful outcome looks like. A repeatable process is more valuable than a one-time fix." },
      { heading: "Turn guidance into a decision", body: "Start with the smallest next step that creates useful evidence: confirm availability, document a gap, ask a provider a specific question, or test the current process. Then use what you learn to prioritize the next investment." },
      { heading: "Keep the conversation moving", body: "The strongest technology programs are reviewed over time. Revisit assumptions, measure outcomes, and adjust the plan as your team, systems, and risk profile change." },
    ],
    takeaway: "Use the action plan below to turn the topic into a clear next step for your team, then revisit it as circumstances change.",
  };
}

export function KnowledgeArticle({ slug, guide }: { slug: string; guide: Guide }) {
  const article = articles[slug] ?? defaultArticle(guide);
  const [copied, setCopied] = useState(false);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const shareArticle = async () => {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title: guide.title, text: article.lead, url });
    else { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
  };
  return (
    <>
      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12 lg:p-14">
        <div className="flex items-start gap-4 rounded-2xl bg-mission-mist p-6"><LightBulbIcon className="mt-1 h-7 w-7 shrink-0 text-mission-gold" /><p className="text-xl font-semibold leading-9 text-slate-700">{article.lead}</p></div>
        <div className="mt-10 grid gap-10">
          {article.sections.map((section, index) => (
            <section key={section.heading} className={`rounded-2xl p-5 sm:p-7 ${index % 2 ? "border-l-4 border-mission-gold bg-amber-50/40" : "bg-slate-50/70"}`}>
              <h2 className="text-3xl font-black tracking-tight text-mission-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-slate-600">
                {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
              {section.sources?.length ? (
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Further reading:{" "}
                  {section.sources.map((source, sourceIndex) => (
                    <span key={source.href}>
                      {sourceIndex > 0 ? "; " : ""}
                      <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-mission-navy underline decoration-mission-gold underline-offset-4 hover:text-mission-ink">
                        {source.label}
                      </a>
                    </span>
                  ))}
                </p>
              ) : null}
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6"><p className="text-sm font-bold text-slate-500">Found this useful?</p><button type="button" onClick={shareArticle} className="inline-flex items-center gap-2 rounded-xl border border-mission-navy/20 px-4 py-2.5 text-sm font-extrabold text-mission-navy transition hover:border-mission-gold hover:bg-mission-mist"><ShareIcon className="h-4 w-4" /> {copied ? "Link copied" : "Share this article"}</button></div><div className="mt-10 flex gap-4 rounded-2xl bg-mission-mist p-6">
          <LightBulbIcon className="h-7 w-7 shrink-0 text-mission-gold" />
          <p className="font-bold leading-7 text-mission-ink">{article.takeaway}</p>
        </div>
      </article>
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="flex items-center gap-3"><CheckCircleIcon className="h-7 w-7 text-mission-gold" /><h2 className="text-2xl font-black text-mission-ink">Put this guide into practice</h2></div>
        <div className="mt-8 grid gap-4">{guide.items.map((item, index) => { const done = completed.has(index); return <button type="button" key={item} onClick={() => setCompleted((current) => { const next = new Set(current); done ? next.delete(index) : next.add(index); return next; })} className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${done ? "border-mission-gold bg-amber-50/60" : "border-slate-200 hover:border-mission-gold hover:bg-mission-mist/50"}`}><div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black transition ${done ? "bg-mission-gold text-mission-ink" : "bg-mission-navy text-white"}`}>{done ? <CheckCircleIcon className="h-5 w-5" /> : index + 1}</div><p className={`font-bold leading-7 transition ${done ? "text-mission-ink line-through decoration-mission-gold/70" : "text-slate-700"}`}>{item}</p></button>; })}</div>
      </section>
      <div className="mt-8 rounded-3xl bg-mission-navy p-8 text-white"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Want a second set of eyes?</p><h2 className="mt-3 text-3xl font-black">Mission can help turn this guide into a plan.</h2><Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink">Talk with Mission <ArrowRightIcon className="h-4 w-4" /></Link></div>
    </>
  );
}


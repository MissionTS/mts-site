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

Object.assign(articles, {
  "managed-it-contract": {
    "lead": "A managed IT contract sets the service boundaries between your organization and its provider. It should explain what is covered, who is responsible, how support is requested, what carries a separate charge, and what happens at renewal or termination. Compare the actual agreement and service attachment, not just a sales summary.",
    "sections": [
      {
        "heading": "Read the scope by people, devices, and locations",
        "body": [
          "Look for the billing unit and what counts as a supported user. Check whether shared workstations, mobile devices, servers, network equipment, conference rooms, contractors, or seasonal workers are included. Confirm which offices and remote locations are in scope, and how added or removed users affect billing.",
          "Ask whether the service includes helpdesk, monitoring, patching, Microsoft 365 administration, endpoint protection, backup monitoring, vendor coordination, and onsite work. Agreements vary; a service name does not tell you what the provider has actually agreed to do."
        ]
      },
      {
        "heading": "Separate recurring work from projects and pass-through costs",
        "body": [
          "The monthly fee may cover routine support but exclude migrations, new locations, hardware, application changes, cabling, major remediation, or after-hours projects. Licensing, cloud consumption, backup storage, internet circuits, and third-party subscriptions can also be billed separately.",
          "Request examples of work treated as a project, the approval process, and how estimates are produced. Clarify travel fees, minimum labor blocks, emergency charges, price increases, and whether the provider may change vendors or tools during the term."
        ]
      },
      {
        "heading": "Understand support and service targets",
        "body": [
          "Check the available channels and hours, how priority is assigned, and what a response-time target means. Acknowledging a ticket is not the same as restoring service. Ask how emergencies are escalated, how after-hours coverage works, and what happens when a problem depends on a software or internet vendor.",
          "Ask what reporting you will receive and how recurring issues, unresolved risks, and recommendations are reviewed with leadership. Service-level commitments should be readable, measurable, and connected to the business impact of the issue."
        ]
      },
      {
        "heading": "Check security, data, and continuity responsibilities",
        "body": [
          "Identify who owns administrator accounts, documentation, backup copies, encryption keys, security alerts, incident coordination, and recovery decisions. Confirm who can access client or employee data, how access is removed, and what assistance is included during an incident.",
          "Check the contract’s confidentiality, data handling, subcontractor, insurance, and breach-notification provisions with appropriate counsel. A technology provider can explain operational procedures but should not replace legal review of contract language."
        ]
      },
      {
        "heading": "Plan for renewal or exit before you need one",
        "body": [
          "Review the initial term, auto-renewal, notice deadline, termination rights, transition assistance, data return, credential transfer, and outstanding fees. Confirm what documentation and configuration exports will be supplied and whether the provider will support an orderly handoff.",
          "Before signing, ask for a sample monthly report and onboarding plan. A clear agreement makes it easier to see who owns each task, what it costs, and how you can change course if the relationship no longer fits."
        ]
      }
    ],
    "takeaway": "A good managed IT contract defines scope, service hours, exclusions, costs, security responsibilities, and exit steps in writing. Resolve ambiguous terms before signing."
  },
  "questions-for-an-msp": {
    "lead": "When evaluating an MSP, ask questions that reveal how the provider works after the sales meeting: who handles support, what security and maintenance are included, how projects are approved, and how you will know whether the environment is improving.",
    "sections": [
      {
        "heading": "Ask how support actually works",
        "body": [
          "Who will answer requests day to day? What channels and hours are available? How are requests prioritized, escalated, and communicated? What does the stated response target measure, and how are urgent incidents handled outside business hours?",
          "Ask for a realistic example of a recurring issue and how the provider would investigate its root cause. Request a sample service report so you can see what leadership would learn about tickets, patterns, open risks, and planned work."
        ]
      },
      {
        "heading": "Clarify the complete service scope",
        "body": [
          "Ask which users, locations, endpoints, servers, applications, and network devices are included. Clarify monitoring, patching, Microsoft 365 administration, identity, endpoint protection, backup checks, restore testing, vendor coordination, and onsite coverage.",
          "Ask what is excluded or billed as a project. Confirm how licenses, hardware, cloud usage, after-hours work, emergency labor, and travel appear on invoices. Compare written proposals line by line rather than relying on broad terms such as all-inclusive."
        ]
      },
      {
        "heading": "Probe security and incident readiness",
        "body": [
          "Who reviews security alerts and when? How are MFA, privileged accounts, endpoint protection, email controls, patching, and backup isolation managed? If a device or account is compromised, who can isolate it, reset access, contact leadership, and coordinate recovery?",
          "Ask how the provider handles suspected data exposure and whether it follows your insurer’s or counsel’s incident instructions. Request an example response workflow and identify the decisions that remain with your organization."
        ]
      },
      {
        "heading": "Understand onboarding and planning",
        "body": [
          "What happens in the first 30, 60, and 90 days? Ask about inventory, documentation, administrator access, backup validation, open issues, security baseline, and user communication. Confirm how inherited problems will be prioritized and quoted.",
          "Who prepares a roadmap, how often will you review it, and how will recommendations connect to budget and business goals? Ask how the provider distinguishes urgent risks from longer-term improvements."
        ]
      },
      {
        "heading": "Check accountability and fit",
        "body": [
          "How does the provider measure response, recurring incidents, security coverage, and client satisfaction? Who is your escalation contact? How are staffing changes, subcontractors, and vendor dependencies handled?",
          "Ask for a reference from an organization with a similar size or operating model. Look for clear answers, realistic commitments, and a willingness to document assumptions. A good fit is a provider whose process you understand and whose responsibilities are explicit."
        ]
      }
    ],
    "takeaway": "Ask for concrete examples, written scope, an onboarding plan, and a sample report. The best questions make service boundaries and accountability easy to compare."
  },
  "outgrown-computer-guy": {
    "lead": "An independent technician can provide valuable personal support, especially when a business is small and its systems are simple. The question is whether the arrangement still provides enough coverage, documentation, security depth, and continuity for the organization’s current needs.",
    "sections": [
      {
        "heading": "Signs the arrangement is under strain",
        "body": [
          "Support may depend on one person’s availability, memory, or access to undocumented accounts. Recurring issues may be fixed repeatedly without a root-cause plan. New hires, remote work, new locations, or additional software may increase complexity faster than the support model can adapt.",
          "Leadership may not have an accurate view of device age, backup readiness, security gaps, vendor contracts, or upcoming costs. These are not criticisms of an individual; they are signs the business may need more structure or additional capacity."
        ]
      },
      {
        "heading": "Compare responsibilities, not labels",
        "body": [
          "A larger MSP is not automatically better. Map the actual work: user support, network maintenance, identity, endpoint protection, patching, backup and recovery, vendor coordination, projects, and planning. Identify which tasks are covered, who is the backup owner, and how urgent requests are handled when the primary technician is unavailable.",
          "Some businesses retain a trusted technician and add managed security, documentation, or after-hours coverage. Others move to a provider with a broader service desk. The right decision depends on service needs, risk, budget, and internal capacity."
        ]
      },
      {
        "heading": "Build a safe transition if you change",
        "body": [
          "Before ending an arrangement, inventory accounts, domains, devices, network diagrams, licenses, backups, vendors, and open issues. Confirm ownership of administrator accounts and business data. Securely transfer credentials; do not rely on one person’s personal email or memory.",
          "Select the replacement support model before removing access or tools. Coordinate monitoring, backups, incident contacts, and user instructions so coverage does not disappear between providers. Keep a written handoff list and validate each critical system."
        ]
      },
      {
        "heading": "A practical self-check",
        "body": [
          "Can another qualified person support the business if the primary technician is sick or unavailable? Can you find current credentials and vendor contacts? Do you know when backups were last restored successfully? Are security alerts reviewed by someone? Can leadership explain the next three technology priorities and their costs?",
          "If several answers are no, start by documenting the environment and closing the highest-impact gaps. You may not need a complete provider change; you do need clear ownership and a support plan that can grow with the business."
        ]
      }
    ],
    "takeaway": "Outgrowing informal support is about coverage and continuity, not the value of a trusted technician. Measure current needs, identify gaps, and choose the smallest support change that addresses them."
  },
  "what-is-a-vcio": {
    "lead": "A virtual chief information officer (vCIO) provides technology planning and leadership on a recurring or fractional basis. The role helps business leaders connect systems, security, budgets, vendors, and projects to organizational goals without hiring a full-time technology executive.",
    "sections": [
      {
        "heading": "What the role should produce",
        "body": [
          "A useful vCIO learns how the organization operates, identifies the systems and risks that matter, and helps leadership prioritize technology decisions. Deliverables may include a roadmap, budget forecast, lifecycle plan, risk summary, project sequencing, and meeting notes with named owners.",
          "The role should translate technical options into business tradeoffs: cost, operational impact, timing, risk reduction, and dependencies. It should also identify decisions that leadership must make rather than quietly treating every recommendation as an IT task."
        ]
      },
      {
        "heading": "What a vCIO is not",
        "body": [
          "The title is not a guarantee of executive-level work. Some providers use it for periodic account meetings or sales reviews. Ask what time is included, who attends, what information is prepared, and how recommendations are tracked after the meeting.",
          "A vCIO does not automatically replace internal IT, compliance counsel, an insurance broker, or a security operations function. Clarify whether the person can approve spending, manage vendors, own projects, or only advise."
        ]
      },
      {
        "heading": "When fractional technology leadership can help",
        "body": [
          "A growing business may be juggling refresh cycles, security requirements, cloud changes, acquisitions, multiple locations, or vendor decisions without a technology leader. A vCIO can provide structure for these decisions and make priorities more visible to executives.",
          "Organizations with internal IT staff may use the role to add strategic perspective, budgeting support, or an independent review. Smaller organizations may use it to create a roadmap and avoid making major purchases only in response to urgent failures."
        ]
      },
      {
        "heading": "How to evaluate a vCIO service",
        "body": [
          "Ask for a sample roadmap, risk report, meeting agenda, and follow-up log. Confirm how the provider learns the environment, how often meetings occur, how recommendations are ranked, and how conflicts of interest are handled when the provider sells the proposed technology.",
          "Measure whether decisions become clearer: are projects sequenced, budgets forecast, risks assigned, and overdue actions revisited? A vCIO relationship is worthwhile when it helps leadership make better-informed decisions and improves follow-through."
        ]
      }
    ],
    "takeaway": "Evaluate a vCIO by the planning work and follow-through delivered: a practical roadmap, clear costs and risks, and decisions connected to business goals."
  },
  "co-managed-it": {
    "lead": "Co-managed IT pairs an organization’s internal technology staff with an outside provider. The internal team keeps business context and day-to-day ownership, while the provider adds agreed capacity, specialist skills, tools, or coverage.",
    "sections": [
      {
        "heading": "Common reasons to use a co-managed model",
        "body": [
          "An internal IT manager may need help with after-hours monitoring, security operations, patching, service desk volume, major projects, Microsoft 365 administration, or a skill gap. Co-management can also provide backup coverage during vacations or hiring transitions.",
          "The model can be flexible: an outside provider may handle a defined technical layer while internal staff remain the primary contact for employees. It works best when the partnership adds capacity without creating two teams that assume the other owns an issue."
        ]
      },
      {
        "heading": "Define the service boundary",
        "body": [
          "Create a responsibility matrix for tickets, identity, devices, network, security alerts, backups, projects, vendors, and incident escalation. Identify who owns the final decision and who communicates with users. Define how tickets move between teams and what information must be documented.",
          "Agree on tools and access. Decide which ticketing system, remote management tools, monitoring consoles, and documentation source are authoritative. Use individual accounts, least privilege, and a process to remove access when a person or provider changes."
        ]
      },
      {
        "heading": "Protect the internal team’s context",
        "body": [
          "The internal team understands business applications, user needs, operational calendars, and informal dependencies. Make that knowledge available through documented workflows and regular handoffs. External specialists should know when a change could affect production, compliance, or customer service.",
          "Establish shared change windows, escalation paths, and an issue review cadence. Avoid parallel ticket queues that hide ownership or make employees repeat the same information."
        ]
      },
      {
        "heading": "Measure the partnership",
        "body": [
          "Track ticket handoffs, time to acknowledge and resolve, recurring incidents, alert ownership, project completion, and the internal team’s workload. Review whether the provider is covering the agreed gap or adding coordination overhead.",
          "Revisit scope when staffing, systems, or risk changes. Co-managed service should make the internal team more effective and resilient; if work is routinely bounced between parties, clarify the matrix and adjust the operating model."
        ]
      }
    ],
    "takeaway": "Co-managed IT works when internal and external teams share tools, documentation, and clear ownership. Define the handoffs before incidents expose the gaps."
  },
  "msp-vs-internal-it": {
    "lead": "Choosing between an MSP and an internal IT employee means comparing coverage, skills, continuity, accountability, and total cost. A salary and a monthly service fee are not directly comparable because each model includes different work and availability.",
    "sections": [
      {
        "heading": "Calculate the full internal cost",
        "body": [
          "Include salary, payroll taxes, benefits, recruiting, training, equipment, software, security tools, and time spent coordinating vendors. Consider coverage during vacations, illness, evenings, and turnover. A single employee may be highly capable but cannot be available every hour or expert in every discipline.",
          "Internal IT can provide deep organizational context and immediate collaboration. That value should be included in the comparison rather than treated as an invisible benefit."
        ]
      },
      {
        "heading": "Calculate the full MSP scope",
        "body": [
          "List the provider’s recurring fee, included users and devices, support hours, onsite expectations, security and backup services, licensing, project fees, after-hours charges, and exclusions. Confirm whether strategic planning and vendor coordination are included.",
          "A provider may offer multiple technicians and specialized roles, but your organization still needs an internal owner to set priorities, approve changes, and communicate business requirements. The MSP’s price does not eliminate internal decision time."
        ]
      },
      {
        "heading": "Compare capability and continuity",
        "body": [
          "Map the work the business needs: helpdesk, endpoint and identity administration, network, cloud, cybersecurity, backups, compliance evidence, applications, projects, and planning. Identify the skills and service hours required for each and who provides backup coverage.",
          "A hybrid model may be appropriate: an internal IT lead handles business-facing work while an MSP provides service desk capacity, managed security, or after-hours monitoring. Define ownership so employees know where to go and issues do not fall between teams."
        ]
      },
      {
        "heading": "Choose based on operating needs",
        "body": [
          "Estimate user count, system complexity, growth, regulatory requirements, and acceptable downtime. Ask how quickly the business needs support and how often technology changes require projects. Compare the models over a multi-year period, including onboarding, turnover, and transition costs.",
          "Review the decision annually. The right model may change as the business grows or hires technical staff. A good choice provides reliable coverage, clear accountability, and skills that match the organization’s needs within its budget."
        ]
      }
    ],
    "takeaway": "Compare total cost and actual coverage, including internal coordination, after-hours needs, specialist skills, and continuity. Many organizations use a deliberate hybrid model."
  },
  "it-onboarding-transition": {
    "lead": "IT onboarding is the controlled process of learning an environment, establishing support, and validating that key systems are protected and documented. It should give the provider and the client a shared view of what exists, what is covered, what is at risk, and what happens next.",
    "sections": [
      {
        "heading": "Before day one: establish ownership and access",
        "body": [
          "Name business and technical contacts, define support channels, confirm users and locations, and schedule the transition around critical operations. Inventory domains, cloud tenants, network systems, vendors, applications, devices, and current projects.",
          "Transfer access securely using individual accounts and least privilege. Confirm who owns global administrator accounts, backup consoles, domain registrars, firewall management, and vendor billing. Avoid shutting off existing tools until replacement coverage is ready."
        ]
      },
      {
        "heading": "First weeks: discover and document",
        "body": [
          "Build or validate the asset and software inventory, network diagrams, vendor contacts, support procedures, warranties, and known recurring issues. Identify systems that are unsupported, undocumented, or dependent on one person.",
          "Check endpoint protection, patch status, MFA coverage, privileged access, backup scope, retention, and restore history. Record evidence and exceptions. Do not assume that an existing tool is functioning simply because it is installed."
        ]
      },
      {
        "heading": "Stabilize high-impact risks",
        "body": [
          "Prioritize work by business impact and likelihood: exposed accounts, failing backups, unsupported critical systems, security alerts without owners, or single points of failure. Agree on emergency fixes separately from longer projects and obtain approval before material changes.",
          "Validate the service desk route with users. Test escalation contacts, remote access, monitoring, and backup restoration where appropriate. Capture application and vendor dependencies before a change could interrupt service."
        ]
      },
      {
        "heading": "The 30-, 60-, and 90-day review",
        "body": [
          "At 30 days, review inventory, access, urgent risks, and support intake. Around 60 days, examine recurring incidents, maintenance coverage, backup evidence, and documentation gaps. By 90 days, agree on a practical roadmap, budget assumptions, owners, and milestones.",
          "A successful onboarding is not measured by the number of tools installed. It is measured by clear responsibilities, stable support, useful documentation, known risks, and a plan the organization can execute."
        ]
      }
    ],
    "takeaway": "A strong IT onboarding inventories, secures, documents, and validates the environment before major changes. Agree on priorities and review progress through the first 90 days."
  },
  "backups-small-business": {
    "lead": "A small-business backup plan defines which information can be restored, how quickly it can be recovered, and who can perform the work during an outage. It should cover business priorities, not just the files that happen to be easiest to copy.",
    "sections": [
      {
        "heading": "Decide what must be recoverable",
        "body": [
          "List shared files, accounting and payroll systems, customer records, Microsoft 365 data, databases, line-of-business applications, device configurations, and other information the business needs to operate. Note who owns each system and what happens if it is unavailable.",
          "Set a recovery point objective (how much recent work can be lost) and recovery time objective (how long the business can be without the system). Different systems may need different targets; a daily file backup may not be adequate for a frequently updated operational database."
        ]
      },
      {
        "heading": "Choose independent, protected copies",
        "body": [
          "Use a backup design with separate copies and storage locations appropriate to the data. Synchronization helps collaboration but may replicate deletion or encryption. Protect backup administration with MFA, unique credentials, and limited delete permissions; consider offline or immutable retention for critical data.",
          "Confirm scope, retention, encryption, restore options, storage limits, and provider responsibilities. Ask whether a compromised everyday administrator could delete both production data and recovery points."
        ]
      },
      {
        "heading": "Monitor and test",
        "body": [
          "Assign someone to review failed jobs and unexplained gaps. Test restores of representative files, then practice recovery for critical systems in a safe environment. Confirm the data opens, permissions are correct, and the recovery time meets business expectations.",
          "Record test dates, systems, selected restore points, results, problems, and corrective actions. Retest after major changes to identity, applications, storage, or providers."
        ]
      },
      {
        "heading": "Plan for an outage",
        "body": [
          "Keep emergency contacts, recovery instructions, licensing details, encryption keys, and decision owners available if email or the normal network is down. Decide who can authorize restoration and how users will receive updates.",
          "During a suspected ransomware incident, protect backup systems and coordinate restoration with responders. Restoring from the wrong point can reintroduce a threat or overwrite useful evidence."
        ]
      }
    ],
    "takeaway": "A business backup is a recoverable, protected copy with an owner and a tested restore path. Start with critical systems, set recovery targets, and practice the steps."
  },
  "network-security-small-business": {
    "lead": "Network security for a small business is the work of controlling who and what can connect, reducing the reach of a compromised device, and maintaining the equipment that carries business traffic. It begins with a current picture of the network and the services that depend on it.",
    "sections": [
      {
        "heading": "Know what is connected",
        "body": [
          "Inventory firewalls, switches, wireless access points, servers, printers, cameras, access control, phones, employee devices, guest devices, and internet circuits. Record who manages each item, its support status, configuration backup, and dependencies.",
          "Unknown devices, default credentials, unpatched systems, and forgotten remote access are difficult to protect. Identify public-facing services and third-party connections, then confirm whether they are still needed."
        ]
      },
      {
        "heading": "Use access boundaries",
        "body": [
          "Separate guest wireless from business systems and consider segmenting sensitive or operational devices so they cannot freely reach employee workstations. Restrict administrative interfaces to trusted management paths and use unique credentials and MFA where supported.",
          "Network segmentation is not a substitute for securing each device. Document permitted traffic and test business workflows so a new rule does not inadvertently disrupt phones, production, or building systems."
        ]
      },
      {
        "heading": "Maintain edge devices and wireless",
        "body": [
          "Update firewall and wireless firmware, review remote-access rules, remove unused accounts, back up configurations, and monitor security alerts. Use strong wireless encryption and change default administrator credentials. Confirm that vendor remote access is approved, time-limited where possible, and attributable to an individual.",
          "Plan for internet resilience based on business impact. A secondary connection may help, but failover needs configuration and testing; a second circuit that shares the same physical route may not provide true diversity."
        ]
      },
      {
        "heading": "Prepare for incidents and change",
        "body": [
          "Keep a network diagram, vendor contacts, device backups, and escalation instructions. Know who can isolate a device, disable a remote-access account, contact the ISP, and approve restoration. Test the response before a real outage.",
          "Review the network after office moves, new equipment, acquisitions, or security incidents. Small, documented changes are easier to troubleshoot than emergency adjustments made without a record."
        ]
      }
    ],
    "takeaway": "Secure small-business networks with an accurate inventory, restricted access, maintained equipment, and tested recovery. Design changes around the systems and workflows that depend on the network."
  },
  "it-support-kokomo": {
    "lead": "Choosing IT support in Kokomo involves more than finding a nearby technician. A dependable arrangement should explain how employees get help, how systems are maintained, what security work is included, and how onsite needs and third-party vendors are coordinated.",
    "sections": [
      {
        "heading": "Map the support your organization needs",
        "body": [
          "List users, locations, business hours, critical applications, network and wireless needs, recurring issues, and upcoming projects. Note which systems cannot be unavailable during production, appointments, customer service, payroll, or financial close.",
          "Separate remote support needs from work that requires a site visit. Ask how urgent onsite requests are scheduled, what travel or project charges apply, and whether routine support is available outside standard business hours."
        ]
      },
      {
        "heading": "Look for complete operational coverage",
        "body": [
          "Ask how the provider handles helpdesk requests, device setup, Microsoft 365, identity, network equipment, patching, endpoint security, backup checks, and vendor escalations. Confirm whether your internal employee or current provider can work alongside the support team.",
          "For manufacturing and facility teams, discuss wireless coverage, connected equipment, network closets, cameras, and access control. For professional offices and practices, ask about account security, access changes, reliable applications, and recovery of important information."
        ]
      },
      {
        "heading": "Evaluate accountability and local fit",
        "body": [
          "Clarify who owns administrator accounts, documentation, alerts, backup restoration, and incident communication. Request a sample report and ask how recurring tickets become permanent fixes. A local presence is useful when the provider also has a clear remote process and defined service area.",
          "Confirm the response commitment in writing and distinguish acknowledgement from resolution. Ask how the provider works with internet, software, and equipment vendors when a problem spans multiple companies."
        ]
      },
      {
        "heading": "Plan a first conversation",
        "body": [
          "Prepare a list of systems, users, locations, recurring issues, and recent outages. Ask the provider to identify the first risks it would investigate, what information it needs, and what would be considered a separate project.",
          "A responsible recommendation should explain assumptions, responsibilities, and costs before changes begin. Start with a discovery conversation and a short prioritized plan rather than committing to a tool or major replacement before the environment is understood."
        ]
      }
    ],
    "takeaway": "Choose Kokomo IT support by fit, written scope, local and remote coverage, security ownership, and a clear recovery plan. Bring your systems and operating needs into the first conversation."
  }
} );

export function getKnowledgeArticleLead(slug: string) { return articles[slug]?.lead; }

Object.assign(articles, {
  "it-support-tipton": {
    "lead": "IT support for a Tipton business should reflect the systems and connectivity the organization actually relies on. A useful provider relationship covers employee help, account and device maintenance, security, backups, and a clear way to coordinate onsite work when remote support is not enough.",
    "sections": [
      {
        "heading": "Begin with your locations and work patterns",
        "body": [
          "List the business addresses, number of employees, work schedules, remote users, and systems needed for daily operations. Note which work stops when internet, phones, shared files, or line-of-business software is unavailable. This is more useful than selecting a provider based only on a town name.",
          "For a business with a primary office and smaller satellite site, ask how remote monitoring and support will work at each address and what onsite scheduling looks like. Verify vendor availability for each specific location before planning a circuit, cloud service, or hardware replacement."
        ]
      },
      {
        "heading": "Make connectivity and recovery part of the plan",
        "body": [
          "Document the internet circuit, firewall, Wi-Fi, phones, cloud services, and any backup connection. Ask whether a secondary path uses a separate carrier or physical route and test failover instead of assuming it will work.",
          "Identify where critical data is stored, who administers backups, what retention is configured, and when a restore was last tested. A recovery plan should explain what happens if the office connection or a key system is unavailable."
        ]
      },
      {
        "heading": "Clarify support responsibilities",
        "body": [
          "Ask which users and devices are included, the support channels and hours, how urgent issues are escalated, and whether service covers Microsoft 365, identity, endpoint protection, patching, and vendor coordination. Define what qualifies as a project and what costs extra.",
          "If the business already has an employee or independent technician, map who owns each task. A written responsibility list helps avoid duplicate work or an alert that each party assumed the other was handling."
        ]
      },
      {
        "heading": "Start with a short prioritized review",
        "body": "Bring the provider your system list, recurring issues, upcoming changes, and outage priorities. Ask for a concise review of the biggest support and recovery gaps, plus owners and next steps. Make improvements in an order the organization can absorb rather than replacing equipment without a clear operational reason."
      }
    ],
    "takeaway": "Choose Tipton IT support by the business’s addresses, connectivity, systems, and support needs. Confirm coverage and recovery responsibilities in writing."
  },
  "it-support-peru": {
    "lead": "A practical IT support plan for a Peru organization begins with the people, buildings, and services that depend on technology. It should make help easy to request, keep accounts and devices maintained, protect important information, and clarify when onsite service is needed.",
    "sections": [
      {
        "heading": "Map the organization before comparing providers",
        "body": [
          "List employees and locations, core applications, Microsoft 365 use, phones, wireless networks, connected equipment, and recurring support issues. Note seasonal schedules, public-facing services, and the systems that cannot be down during a busy workday.",
          "Availability and installation options can vary by exact address. Confirm internet and vendor service for each location instead of relying on a city-level listing. Record circuit speed, upload needs, repair contacts, contract dates, and any single point of failure."
        ]
      },
      {
        "heading": "Plan for local and remote support together",
        "body": [
          "Remote support can resolve many account, application, and device issues quickly. Ask how an onsite request is prioritized, who schedules it, what travel or project charges apply, and how the provider will communicate if a problem is waiting on a site visit.",
          "For buildings with several work areas, confirm Wi-Fi coverage, network closet documentation, cable labeling, equipment power, and physical access controls. A site visit is more effective when the provider knows the layout and the business workflow."
        ]
      },
      {
        "heading": "Protect data and continuity",
        "body": [
          "Identify the files and systems necessary to continue serving customers, clients, or community members. Verify backup scope, access protection, retention, and the most recent restore test. Make sure recovery instructions and vendor contacts remain available if email or the normal network is unavailable.",
          "Review MFA, administrator accounts, endpoint protection, patching, and employee offboarding. Pair technical controls with a clear reporting route for suspicious emails, lost devices, or unusual sign-in prompts."
        ]
      },
      {
        "heading": "Set shared expectations",
        "body": "Before an engagement, define who manages each account, application, vendor, and backup task. Request a written support scope, escalation process, onboarding checklist, and sample report. If internal staff or another provider remain involved, document the handoffs so issues do not sit between teams."
      }
    ],
    "takeaway": "Peru IT support should combine address-specific planning, remote help, coordinated onsite service, and tested recovery. Start with an inventory and a clear ownership map."
  },
  "it-support-logansport": {
    "lead": "Logansport businesses need IT support that connects everyday employee requests with the systems that keep operations running. A provider should explain the helpdesk, maintenance, security, network, vendor, and recovery work it will own—and what remains the organization’s responsibility.",
    "sections": [
      {
        "heading": "Identify operational dependencies",
        "body": [
          "Document the devices, applications, internet services, phones, and shared information the organization uses. Note whether work depends on one building, multiple departments, a shop floor, a service counter, or staff working away from the office.",
          "Rank systems by impact. A slow printer may be inconvenient; a down scheduling, accounting, or production system may interrupt revenue or service. This ranking helps set reasonable support priorities and recovery targets."
        ]
      },
      {
        "heading": "Review the network and equipment lifecycle",
        "body": [
          "Ask whether the provider maintains diagrams, warranty dates, configuration backups, and a device inventory. Check Wi-Fi coverage in work areas, network closet labeling, power protection, and whether critical equipment is still supported by its manufacturer.",
          "Plan replacements before equipment becomes an emergency. Include firewall, wireless, switching, endpoints, servers, and specialized devices, while coordinating changes around operational schedules."
        ]
      },
      {
        "heading": "Make support and security measurable",
        "body": [
          "Confirm support hours, urgent escalation, onsite coordination, endpoint coverage, patching, MFA administration, backup monitoring, and vendor responsibilities. Clarify whether response targets measure acknowledgement or service restoration.",
          "Request a sample report that shows recurring ticket patterns, patch or device exceptions, backup test results, and recommended actions. A useful report identifies owners and dates rather than simply listing tools."
        ]
      },
      {
        "heading": "Prepare for disruptions",
        "body": "Agree on who can isolate a device, contact leadership, reach the internet provider, approve a restore, and communicate with employees. Test a representative backup recovery and keep contact instructions available outside the systems that might be down. Review the plan after major changes or incidents."
      }
    ],
    "takeaway": "A strong Logansport support plan ties service priorities to business operations, maintains network documentation, and assigns owners for security and recovery."
  },
  "it-support-noblesville": {
    "lead": "As a Noblesville organization adds employees, locations, or cloud services, technology support needs to scale without losing clear ownership. The right IT plan aligns helpdesk support, identity, devices, security, networking, and vendor coordination with the organization’s growth.",
    "sections": [
      {
        "heading": "Design for change, not just today’s headcount",
        "body": [
          "Inventory users, devices, locations, software, shared workstations, and third-party services. Identify which teams are growing, how new employees are onboarded, and what access should be removed when someone leaves.",
          "Ask how the provider handles new sites, acquisitions, seasonal staffing, remote users, and device refreshes. A consistent onboarding and offboarding workflow reduces delays and lingering access."
        ]
      },
      {
        "heading": "Standardize the foundation",
        "body": [
          "Establish consistent MFA, administrator accounts, endpoint security, operating system updates, device encryption, and recovery methods. Document exceptions for legacy equipment or specialized applications and assign a plan to address them.",
          "For multi-site operations, review firewall configuration, Wi-Fi design, guest access, network segmentation, and internet failover. Standardization makes support more predictable while leaving room for real differences between locations."
        ]
      },
      {
        "heading": "Align service scope with internal capacity",
        "body": [
          "If the organization has internal IT staff, define whether the MSP handles service desk, monitoring, security operations, projects, or after-hours coverage. If it does not, confirm who owns vendor escalations, technology planning, and staff communication.",
          "Clarify recurring fees, project estimates, licensing, onsite work, and after-hours charges. Growth can expose pricing assumptions; request a clear process for adding users and services."
        ]
      },
      {
        "heading": "Create a growth-aware roadmap",
        "body": "Set quarterly priorities for capacity, security, lifecycle replacement, and application changes. For each item, identify a business owner, cost range, dependency, and target window. Review progress regularly so expansion does not turn every technology change into an emergency."
      }
    ],
    "takeaway": "Scalable Noblesville IT support combines repeatable onboarding, consistent security, clear service boundaries, and a roadmap that adjusts as the organization grows."
  },
  "it-support-westfield": {
    "lead": "Westfield organizations should evaluate IT support around their actual offices, staff, and service expectations. A growing workplace or newly occupied building can bring new network, Wi-Fi, access, device, and vendor responsibilities that are easy to overlook during move-in.",
    "sections": [
      {
        "heading": "Plan for the building and the people in it",
        "body": [
          "Inventory work areas, conference rooms, phones, printers, wireless access points, cameras, and access-control devices. Confirm which systems rely on the business network and who owns their support.",
          "For a new or renovated space, document cable pathways, network closets, switch capacity, Wi-Fi coverage, internet handoff, UPS, and equipment access. Coordinate technology work with construction and facilities schedules before ceilings and walls close."
        ]
      },
      {
        "heading": "Make new employee support repeatable",
        "body": [
          "Define the steps for account creation, device setup, MFA enrollment, application access, training, and offboarding. Use role-based access rather than copying another employee’s permissions without review.",
          "Set a clear helpdesk route and explain what information users should include when reporting an issue. Early clarity reduces repeat questions and helps the provider identify recurring problems."
        ]
      },
      {
        "heading": "Secure connected systems",
        "body": [
          "Apply updates and unique credentials to network, camera, and access-control equipment. Separate guest Wi-Fi and consider isolating building systems from employee devices. Limit vendor access and remove it when work is complete.",
          "Check endpoint coverage, MFA, backup protection, and alert ownership. Identify who can act if an account or building system behaves unexpectedly and how to reach that person after hours."
        ]
      },
      {
        "heading": "Set expectations for remote and onsite service",
        "body": "Ask how quickly routine issues are acknowledged, how urgent problems are escalated, when a technician visits, and which costs are outside the monthly agreement. Keep diagrams, vendor contacts, and system owners current as the building changes."
      }
    ],
    "takeaway": "Westfield IT support should include the physical workplace, connected systems, employee onboarding, and a defined onsite process—not only remote helpdesk requests."
  },
  "it-support-carmel": {
    "lead": "Carmel professional firms and growing businesses often depend on cloud accounts, client information, specialized applications, and reliable communications. IT support should make those services easier to manage while documenting who can access sensitive systems and how the organization recovers from an outage.",
    "sections": [
      {
        "heading": "Understand the data and obligations",
        "body": [
          "List the information the business stores—client files, financial records, health information, contracts, or employee data—and identify where it lives and who can access it. Consult qualified legal or compliance professionals for obligations tied to your industry or contracts.",
          "Use that inventory to prioritize account protection, retention, access reviews, device encryption, and recovery. Avoid collecting or retaining data without a clear business reason and owner."
        ]
      },
      {
        "heading": "Secure identity and cloud access",
        "body": [
          "Require MFA for email, remote access, administrator accounts, and important cloud applications. Use individual accounts, least privilege, and timely offboarding. Review external sharing and delegated access periodically.",
          "Confirm that endpoint protection, patching, mobile access, and sign-in alert ownership are included in the support plan. A cloud service remains dependent on secure credentials and usable recovery methods."
        ]
      },
      {
        "heading": "Protect client work and continuity",
        "body": [
          "Identify applications and files required to serve clients. Verify backup scope, retention, restricted deletion access, and restore-test results. Document how staff continue essential work if email, phones, or a line-of-business application is unavailable.",
          "Set escalation contacts and communications roles for a security event. Keep insurer and vendor instructions available, and coordinate incident response with legal counsel when client or regulated information may be involved."
        ]
      },
      {
        "heading": "Evaluate provider accountability",
        "body": "Ask for written service scope, support hours, project rules, vendor coordination, reporting, and exit provisions. Request a sample risk or roadmap review. Recommendations should explain impact, ownership, and cost so leadership can prioritize work without relying on unexplained technical jargon."
      }
    ],
    "takeaway": "Carmel IT support should protect identity and client workflows, verify recovery, and make service responsibilities visible to leadership."
  },
  "it-support-lafayette": {
    "lead": "Lafayette organizations may coordinate office teams, remote employees, research or production systems, and a wide mix of vendors. IT support should begin with the systems and workflows the organization depends on, then establish clear boundaries for service, security, and recovery.",
    "sections": [
      {
        "heading": "Map users, locations, and specialized systems",
        "body": [
          "Inventory users, endpoints, cloud services, network equipment, critical applications, and vendor-managed systems. Record which systems are business-critical and who can approve access or changes.",
          "If a line-of-business, laboratory, production, or specialized system has its own vendor, identify support contacts, maintenance windows, network requirements, and data dependencies. Do not apply changes to specialized equipment without coordinating with its owner."
        ]
      },
      {
        "heading": "Make access and remote work consistent",
        "body": [
          "Use individual accounts, MFA, least privilege, and a defined offboarding process. Review remote-access methods and third-party accounts; remove access that is no longer needed and document exceptions for systems that cannot use standard controls.",
          "Standardize laptop updates, endpoint protection, encryption, and support enrollment. Give employees one clear channel for requests and suspicious activity reports."
        ]
      },
      {
        "heading": "Plan network resilience and recovery",
        "body": [
          "Document circuits, firewalls, wireless, switches, and any secondary connection. Verify exact-address availability and test failover instead of relying on advertised coverage or a proposed design.",
          "Set recovery expectations for important systems, check backup isolation and retention, and test restores. Record the time, outcome, and unresolved dependencies so leadership can make realistic continuity decisions."
        ]
      },
      {
        "heading": "Coordinate multiple providers",
        "body": "Create a responsibility matrix showing which provider handles each system, who owns credentials, and how issues are escalated. This is especially important when software, internet, facilities, and IT vendors share a workflow. Review open issues and projects regularly with the internal business owner."
      }
    ],
    "takeaway": "Lafayette IT support starts with accurate system ownership, special vendor dependencies, and tested continuity—not a one-size-fits-all device package."
  },
  "howard-county-internet": {
    "lead": "Business internet availability and performance can vary from one street address to another, even within the same community. Compare service only after checking the exact location and the business requirements for upload capacity, reliability, repair, and public IP needs.",
    "sections": [
      {
        "heading": "Check each address independently",
        "body": [
          "Use the FCC National Broadband Map and Indiana’s broadband map to identify reported options, then verify directly with the provider. Map data and provider listings are useful starting points, not a guarantee that a circuit can be installed on your timeline or at the quoted price.",
          "Ask the provider to confirm serviceability, installation lead time, construction charges, equipment, contract term, and any building access requirements. For multi-location businesses, repeat this process for every address."
        ]
      },
      {
        "heading": "Compare business service details",
        "body": [
          "Ask about committed upload and download speeds, static IP availability, service-level commitments, repair windows, support hours, modem or router ownership, and price changes after introductory periods. Clarify whether the quote is dedicated or shared service and what happens during congestion.",
          "For voice, cloud applications, video, or remote access, test actual performance and latency at busy times. A high advertised download speed does not guarantee adequate upload capacity or consistent performance for every workflow."
        ]
      },
      {
        "heading": "Design backup connectivity deliberately",
        "body": [
          "Identify which operations must continue during an outage and estimate how long the business can tolerate interruption. A secondary circuit, fixed wireless, or mobile connection may help, but the backup must support the required traffic and be tested with the firewall and phones.",
          "Check whether the primary and secondary services share a carrier, entrance path, pole, or local infrastructure. A backup that depends on the same physical route may fail during the same event. Document who contacts each provider."
        ]
      },
      {
        "heading": "Use current maps and verify claims",
        "body": "FCC availability maps show provider-reported service data and let users check specific locations; Indiana’s broadband maps provide state-specific information. When a listing appears inaccurate, use the map’s challenge or feedback process and retain provider correspondence. Review service before a move, renewal, or expansion."
      }
    ],
    "takeaway": "Check business internet by exact address, verify claims with providers, compare upload and repair terms, and test any backup circuit. Maps help narrow options but do not replace a confirmed quote.",
    "sources": [
      {
        "label": "FCC National Broadband Map guide",
        "href": "https://help.bdc.fcc.gov/hc/en-us/articles/10467446103579-How-to-Use-the-FCC-s-National-Broadband-Map"
      },
      {
        "label": "Indiana Broadband maps",
        "href": "https://www.in.gov/indianabroadband/maps/"
      }
    ]
  },
  "indiana-breach-notification": {
    "lead": "When personal information may have been exposed, an Indiana business should quickly contain the technical issue, preserve facts, and determine whether notification duties apply. Notification rules depend on the information, circumstances, affected people, and current law; involve qualified counsel rather than relying on a generic checklist.",
    "sections": [
      {
        "heading": "Start the incident response",
        "body": [
          "Use the organization’s response plan and notify the designated IT/security lead, leadership, insurer, and legal counsel. Preserve relevant logs, affected messages, device details, and a timeline. Avoid deleting evidence or making public statements before the response team understands the facts.",
          "Contain compromised accounts or devices using a controlled process. If a vendor or cloud service is involved, open an incident with that provider and record the scope and response information it supplies."
        ]
      },
      {
        "heading": "Establish what information and people may be affected",
        "body": [
          "Work with technical responders and counsel to determine which systems and records were involved, what categories of personal information may have been accessed, the period of exposure, and which Indiana residents or other individuals may be affected.",
          "Distinguish confirmed facts from assumptions. Preserve the basis for scope decisions and revisit them if forensic findings change. The legal definition of a reportable breach and applicable exceptions should be assessed by counsel against current Indiana law and other relevant jurisdictions."
        ]
      },
      {
        "heading": "Coordinate notification decisions",
        "body": [
          "Indiana’s Attorney General provides business breach FAQs and a notification form. Counsel should review whether the circumstances trigger notice, who must be notified, timing, content, and any additional regulator or contractual obligations. Organizations with residents in multiple states may face multiple laws.",
          "Do not assume that an IT provider, insurer, or hosting company will make every required notification on your behalf. Assign an owner to track decisions, deadlines, approvals, and copies of notices."
        ]
      },
      {
        "heading": "Prepare before an event",
        "body": [
          "Maintain a current data and vendor inventory, incident contacts, insurance instructions, and secure recovery access. Practice who investigates, who decides notification, who communicates with customers, and how systems are restored.",
          "After the incident, review what delayed detection, containment, scope decisions, or communications. Turn those lessons into specific control or process changes and confirm responsibilities with leadership."
        ]
      }
    ],
    "takeaway": "Treat a suspected data breach as both a technical incident and a legal decision. Preserve facts, involve counsel early, and confirm current Indiana and other applicable notification requirements.",
    "sources": [
      {
        "label": "Indiana Attorney General business security breach FAQs and form",
        "href": "https://www.in.gov/attorneygeneral/consumer-protection-division/id-theft-prevention/security-breaches/security-breach-faqs-and-notification-form-for-businesses/"
      },
      {
        "label": "Indiana Cybersecurity Hub privacy toolkit",
        "href": "https://www.in.gov/cybersecurity/government/best-practices-standards-and-resources/got-privacy-new-indiana-privacy-toolkit-offers-practical-easy-to-use-resource-for-small-business-non-profits-and-local-government/"
      }
    ]
  },
  "indiana-tech-grants": {
    "lead": "Technology grants can reduce the cost of some projects, but programs have specific applicants, uses, deadlines, matching requirements, and reporting obligations. A small business should verify that a current program accepts its project before treating grant funding as part of the technology budget.",
    "sections": [
      {
        "heading": "Define the project before searching",
        "body": [
          "Write down the business problem, proposed technology, total cost, measurable outcome, implementation schedule, and who will manage the work. Potential projects might involve research and commercialization, export activity, workforce capability, or a community partnership—but each funding program defines eligible uses differently.",
          "Separate eligible project costs from routine operating costs, subscriptions, unrelated hardware, and work completed before approval. Do not assume that a general technology upgrade qualifies simply because a program supports innovation or small business growth."
        ]
      },
      {
        "heading": "Search official state and local sources",
        "body": [
          "Start with the Indiana Economic Development Corporation’s current entrepreneur and business programs, the Indiana Small Business Development Center, and the relevant city or county economic development office. Check program status directly with the administrator; older articles and third-party listings may describe expired funding.",
          "Some Indiana programs are tied to federal SBIR/STTR research awards or export-related activity rather than general IT purchases. Read the applicant criteria and contact the program before spending time preparing an application."
        ]
      },
      {
        "heading": "Build an application-ready package",
        "body": [
          "Prepare a clear scope, vendor quotes, budget, timeline, business registration information, match-funding plan if required, and measurable milestones. Explain how the project supports the program’s stated objective and how progress will be reported.",
          "Ask whether reimbursement occurs after expenses, what records are required, whether procurement rules apply, and what happens if costs or timelines change. Assign an owner to track documents, deadlines, approvals, and final reporting."
        ]
      },
      {
        "heading": "Budget as if funding is uncertain",
        "body": "Grants are competitive and may be restricted, delayed, or unavailable. Keep a viable plan that does not depend on an award unless the program has formally approved it. Treat grant administration as project work and confirm the tax and accounting implications with qualified advisors."
      }
    ],
    "takeaway": "Verify a grant’s current status and eligible uses with the official program administrator before budgeting around it. A well-defined project and documented outcomes improve readiness, but do not guarantee an award.",
    "sources": [
      {
        "label": "IEDC entrepreneurship programs",
        "href": "https://iedc.in.gov/entrepreneurship/programs"
      },
      {
        "label": "Indiana SBIR/STTR program",
        "href": "https://iedc.in.gov/sbir"
      }
    ]
  }
} );

Object.assign(articles, {
  "physical-security-cybersecurity": {
    "lead": "Physical security and cybersecurity meet anywhere a person, device, or building system can grant access. A stolen laptop, unprotected network closet, compromised camera, or shared badge can give an intruder a path into systems and data. Treat the building and the network as parts of one security program.",
    "sections": [
      [
        "Map the paths into your systems",
        [
          "List sensitive rooms, work areas, network equipment, cameras, access-control panels, and devices that store or transmit business information. Note who can enter each location, how visitors are escorted, and what happens to badges and keys when someone changes roles or leaves.",
          "Include equipment rooms and secondary locations that are easy to overlook, such as reception desks, conference rooms, wiring closets, and remote sites. A simple floor plan, access list, and device inventory help teams find weak points without turning the review into a major project."
        ]
      ],
      [
        "Connect physical events to cyber response",
        [
          "A lost laptop or forced door may require account revocation, device isolation, log review, and preservation of video or access records. Decide who can take each action and how security staff, IT, facilities, and leadership contact one another after hours.",
          "Protect cameras and door controllers like other networked equipment: change default credentials, limit administration, apply supported updates, and place devices on appropriate network segments. A security appliance with broad access can become a foothold if its account or software is neglected."
        ]
      ],
      [
        "Build controls people can follow",
        [
          "Use individual badges, least-privilege access groups, visitor sign-in, automatic door schedules, and a documented process for temporary access. Review access lists on a regular schedule and after staffing changes. Keep emergency access possible while recording who used it and why.",
          "Train staff to challenge tailgating politely, report missing badges, secure unattended devices, and avoid sharing door codes. Test camera views, retention, time synchronization, and alert routing so that evidence is usable when an incident needs investigation."
        ]
      ]
    ],
    "takeaway": "Physical security belongs in cybersecurity reviews because doors, badges, cameras, and networked building systems all affect access. Inventory them, assign owners, and connect physical incident procedures to account and device response."
  },
  "security-baseline": {
    "lead": "A security baseline is a small, documented set of controls every organization expects to be in place before adding advanced tools. It reduces the common ways attackers enter, limits what a stolen account or infected laptop can reach, and gives leadership a way to track gaps.",
    "sections": [
      [
        "Protect identities and devices first",
        [
          "Require multifactor authentication for email, remote access, administrator accounts, and other critical services. Use separate administrator accounts, remove stale access promptly, and make recovery methods belong to the organization rather than an individual employee.",
          "Keep an inventory of company devices and supported software. Enable encryption, endpoint protection, automatic updates, and screen locking. Define how new devices are enrolled and how lost or retired devices are removed from access and data."
        ]
      ],
      [
        "Make recovery part of the baseline",
        [
          "Back up critical systems and business data using retention and access controls that match the impact of loss. Keep recovery credentials protected separately from everyday administrator accounts; if ransomware can delete both production data and backups, backup existence alone is not enough.",
          "Select representative files and systems for restore tests. Record how long recovery took, what data was missing, who approved the process, and what needs correction. Establish a realistic recovery objective with business owners instead of assuming every system can be restored instantly."
        ]
      ],
      [
        "Measure ownership, not checkbox completion",
        [
          "For every control, name an owner, evidence source, review cadence, and exception process. A policy that says MFA is required is different from a report showing which accounts still lack it; collect evidence that demonstrates coverage and follow up on gaps.",
          "Review the baseline quarterly and after major changes such as a new location, acquisition, cloud migration, or cyber-insurance renewal. Prioritize fixes according to business impact and exposure, then track overdue exceptions with a decision-maker and target date."
        ]
      ]
    ],
    "takeaway": "A useful security baseline is specific enough to verify. Start with identity, endpoints, and recoverable data, assign control owners, and use evidence and exceptions to drive the next round of improvements."
  },
  "microsoft-365-setup": {
    "lead": "Microsoft 365 works best when identity, file storage, collaboration, devices, and retention are designed together. Default settings may not reflect how your team shares information or recovers from mistakes. A short design pass prevents scattered files, confusing Teams, and access that outlives a business need.",
    "sections": [
      [
        "Set the rules for identity and access",
        [
          "Define how users are created, assigned licenses, secured with multifactor authentication, and disabled when they leave. Protect administrator accounts with separate credentials and limited use. Review guest access and external sharing so collaboration is available without leaving every site open by default.",
          "Decide which devices may access company data and how you handle personal phones or computers. Pair access policies with a supportable enrollment process; an enforcement rule that blocks legitimate work without a recovery path often gets bypassed."
        ]
      ],
      [
        "Give files and Teams a clear home",
        [
          "Choose when work belongs in a SharePoint site, a Teams channel, or an individual OneDrive. Use ownership and naming rules that make it clear who maintains a workspace, what content it holds, and how a team member requests access.",
          "Plan guest collaboration, confidential content, retention, and the lifecycle of inactive workspaces. Review permissions at the site or group level instead of sharing individual links indefinitely. Provide employees with a short guide for common tasks so they do not create duplicate storage to work around confusing structure."
        ]
      ],
      [
        "Plan operations and recovery",
        [
          "Document licensing, service administrators, device policies, key integrations, and escalation contacts. Establish who reviews sign-in alerts, handles suspected account compromise, and communicates an outage. Record configuration decisions so the environment does not depend on one administrator’s memory.",
          "Test what happens when a file is deleted, a user leaves, a device is lost, or an administrator is unavailable. Retention, recycle bins, version history, and backup can serve different purposes; verify the recovery behavior and timeline for the data your organization cannot afford to lose."
        ]
      ]
    ],
    "takeaway": "Treat Microsoft 365 as an operating environment rather than a collection of apps. Clear identity rules, file ownership, device controls, and tested recovery make it easier for staff to collaborate securely."
  },
  "proactive-it": {
    "lead": "Proactive IT is the recurring work that reduces avoidable interruptions before a user reports a failure. It combines monitoring with maintenance, pattern analysis, lifecycle planning, documentation, and conversations about what the business needs next.",
    "sections": [
      [
        "Turn alerts into useful maintenance",
        [
          "Monitoring should identify a condition that needs action: a failing disk, a stopped backup, an exposed service, unusual device health, or a capacity trend. Define severity, who reviews the signal, and how the provider confirms the issue was resolved.",
          "Patch operating systems, common applications, and network equipment on a published cadence. Test important changes where appropriate, communicate expected interruptions, and keep an exception log for devices or systems that cannot follow the standard schedule."
        ]
      ],
      [
        "Fix recurring causes, not only tickets",
        [
          "Review repeated tickets by application, location, device model, user workflow, or vendor. Several small requests may point to one underlying issue, such as poor wireless coverage, an unreliable integration, confusing permissions, or equipment reaching end of life.",
          "Track change history and maintain practical documentation: device inventory, network diagrams, vendor contacts, license ownership, recovery steps, and administrator access. Documentation should be stored where authorized staff can reach it during an outage, not only inside the support system."
        ]
      ],
      [
        "Connect maintenance to a roadmap",
        [
          "Create a lifecycle view of warranties, operating-system support, device age, and recurring service risk. Forecast replacement costs and explain the impact of deferring a refresh. This allows leaders to schedule investment rather than react to a surprise failure.",
          "Hold periodic reviews that cover operational risks, completed work, open issues, security posture, and upcoming projects. A useful report names owners and dates; a dashboard full of green indicators is not a substitute for explaining decisions and tradeoffs."
        ]
      ]
    ],
    "takeaway": "Proactive IT turns monitoring and support history into prevention, reliable documentation, and a roadmap. Ask for examples of recurring problems that were permanently resolved and how planned work is measured."
  },
  "physical-security": {
    "lead": "A connected camera and access-control system is part of both facility operations and the business network. Good planning starts with what people need to see and control, then accounts for privacy, network capacity, power, retention, access roles, and incident response.",
    "sections": [
      [
        "Design around actual facility needs",
        [
          "Map entrances, delivery areas, cash or inventory rooms, restricted workspaces, and routes people use after hours. Select camera views to answer specific questions while avoiding unnecessary capture of private spaces. Check lighting and sight lines at the times incidents are most likely to occur.",
          "Set door schedules and access groups around job responsibilities, not broad convenience. Define visitor procedures, temporary credentials, lost badges, emergency egress, and how staff request a change. Decide who reviews access exceptions and footage requests."
        ]
      ],
      [
        "Check infrastructure before installation",
        [
          "Estimate the bandwidth and storage each camera needs at the selected resolution, frame rate, and retention period. Confirm switching, PoE budgets, cable routes, recording capacity, UPS coverage, and available rack space before buying equipment.",
          "Place cameras, controllers, and recorders on a network design with restricted administration and only the connections they need. Change default credentials, apply updates, synchronize time, and document device ownership. Coordinate security-system changes with IT so new equipment does not introduce unmanaged access paths."
        ]
      ],
      [
        "Operate and review the system",
        [
          "Limit footage access to authorized roles and establish how viewing, exporting, retention, and deletion are logged. Keep recorded video only as long as policy and business needs require. Make sure the people responsible for incidents know how to preserve relevant footage quickly.",
          "Test camera views, badge readers, alerts, recording, and recovery after installation and major changes. Review permissions when employees or vendors leave. Include system downtime and evidence preservation in the incident plan, with a fallback if the normal administrator is unavailable."
        ]
      ]
    ],
    "takeaway": "A reliable security system is designed for specific operational questions and maintained like business-critical IT. Confirm views, network capacity, access ownership, retention, and response procedures before deployment."
  },
  "network-closet": {
    "lead": "A network closet that is labeled, powered, cooled, secured, and documented saves time during outages and makes future changes safer. The goal is not showroom neatness: technicians should be able to identify equipment and trace a connection without disturbing unrelated services.",
    "sections": [
      [
        "Check power, cooling, and physical condition",
        [
          "Confirm equipment is supported by the intended circuit and UPS, and that battery capacity matches the time needed for safe shutdown or generator transfer. Look for overloaded power strips, blocked airflow, excessive dust, water exposure, and heat that shortens equipment life.",
          "Restrict room access to people with a business need. Keep the area clear of storage, chemicals, and unrelated materials. Verify smoke detection and building access practices with facilities; network equipment cannot be made reliable through configuration alone if its environment is unsafe."
        ]
      ],
      [
        "Make the wiring understandable",
        [
          "Label both cable ends using a consistent scheme and maintain a simple port map. Identify uplinks, patch panels, access points, cameras, printers, and phone runs. Remove abandoned cable only after confirming it is not in service, then preserve enough slack for future maintenance.",
          "Record switch names, management addresses, firmware, serial numbers, warranty dates, VLAN purposes, and vendor support details in the organization’s documentation system. Protect credentials and do not leave them on a paper note inside an unlocked room."
        ]
      ],
      [
        "Plan changes and capacity",
        [
          "Document what is connected before moving, adding, or replacing equipment. Photographing the rack can help, but it should supplement a port map and change record. Schedule changes, identify affected services, and define a rollback step for network changes that could interrupt operations.",
          "Review available switch ports, PoE budget, UPS capacity, rack space, cooling, and uplink speed before adding cameras or wireless access points. Keep a known-good configuration backup and verify management access after firmware updates."
        ]
      ]
    ],
    "takeaway": "Treat a network closet like critical infrastructure: keep it clean, secured, labeled, and documented, and check power and capacity before making changes."
  },
  "90-day-plan": {
    "lead": "A 90-day technology plan converts a broad backlog into a short sequence of work leaders can fund, assign, and review. It should connect each task to an operational outcome, explain dependencies, and leave room for urgent issues that emerge during delivery.",
    "sections": [
      [
        "Establish the baseline",
        [
          "Ask department leaders what systems create the most friction, where a failure would stop service, and what projects are already committed. Review recent tickets, security findings, warranties, vendor contracts, backup results, and planned staffing or location changes.",
          "Separate immediate exposure from improvement opportunities. A compromised admin account, failed backup, or unsupported critical server deserves a different priority from a request to add a new feature. Record assumptions and gather enough evidence to explain why a task is ranked."
        ]
      ],
      [
        "Choose a small number of outcomes",
        [
          "Pick three to five outcomes the organization can realistically complete or materially advance in one quarter. Examples include reducing account risk, making recovery measurable, replacing a failing network component, improving onboarding, or creating a lifecycle budget.",
          "Break outcomes into deliverables with an owner, dependency, target date, estimated cost, and proof of completion. Avoid plans that contain only tool purchases; include configuration, staff communication, operational ownership, and how success will be measured."
        ]
      ],
      [
        "Review progress and reset priorities",
        [
          "Meet at regular intervals to discuss completed work, blockers, costs, incidents, and decisions needed from leadership. Escalate dependencies early, such as a vendor approval, user testing, or a change window that could delay a project.",
          "At day 90, compare results with the original goals, document unfinished work and reasons, and choose the next priorities. Updating the plan is part of the process: business conditions change, so the roadmap should make tradeoffs visible rather than pretending every task remains equally important."
        ]
      ]
    ],
    "takeaway": "A useful 90-day plan is short, owned, and tied to evidence. Agree on measurable outcomes, review blockers regularly, and use the end-of-quarter review to reset the next set of priorities."
  },
  "intune-business": {
    "lead": "Microsoft Intune is a cloud service for managing and protecting devices, applications, and access policies. For a business, the value comes from consistent configuration and visibility across laptops and mobile devices, but only when enrollment, privacy, support, and offboarding are designed for the workforce.",
    "sections": [
      [
        "Know which devices you are managing",
        [
          "Decide which company-owned Windows, macOS, iOS, and Android devices are in scope and whether personally owned devices may access company data. Document enrollment requirements, ownership labels, minimum supported versions, and how a user requests help when a device fails compliance.",
          "Choose a staged deployment. Pilot policies with representative users and applications, test remote and onsite workflows, and communicate what the company can see or control. Clear expectations reduce confusion, especially for personal devices where privacy boundaries matter."
        ]
      ],
      [
        "Apply a supportable configuration",
        [
          "Use policies for encryption, screen lock, updates, endpoint protection, firewall, and approved application access where supported. Coordinate device compliance rules with identity and conditional access so an outdated or compromised device can be restricted in a controlled way.",
          "Assign policies using well-understood groups and document precedence and exceptions. Test application deployment, Wi-Fi or VPN profiles, certificates, and recovery methods before broad rollout. Maintain a way to reach users who cannot sign in because the device itself is out of policy."
        ]
      ],
      [
        "Operate through the device lifecycle",
        [
          "Connect onboarding to procurement and identity creation, and connect offboarding to access revocation, data retention, and device return or wipe. Record who can issue remote actions and require verification before destructive steps such as a full wipe.",
          "Review compliance trends, enrollment failures, operating-system support, and exception age. Keep administrator roles limited, protect admin accounts with multifactor authentication, and periodically test whether a lost device can be contained without disrupting unrelated business data."
        ]
      ]
    ],
    "takeaway": "Intune can make device support and security more consistent, but the policies must fit how people work. Pilot enrollment and compliance rules, explain privacy boundaries, and document recovery and offboarding."
  },
  "more-than-helpdesk": {
    "lead": "An IT provider should help the business operate and improve technology, not only close support tickets. Helpdesk response matters, but long-term value also depends on prevention, security, lifecycle planning, documentation, vendor coordination, and clear ownership.",
    "sections": [
      [
        "Look at the work between tickets",
        [
          "Ask what the provider does to review patch status, endpoint health, backup alerts, identity risk, warranty dates, and recurring incidents. Request examples where ticket patterns led to a permanent fix or an investment that prevented disruption.",
          "A provider should make the environment understandable through current inventories, network diagrams, vendor contacts, license records, and recovery instructions. Confirm where documentation lives, who can access it, and how it will be returned if the relationship ends."
        ]
      ],
      [
        "Expect planning and accountability",
        [
          "A technology roadmap translates business plans into dependencies, costs, and timing. It should help leaders decide whether to refresh devices, change a workflow, improve controls, or defer work. Ask how recommendations are prioritized and how the provider reports risks or overdue items.",
          "Clarify service hours, response definitions, project boundaries, escalation owners, and after-hours procedures. Ask how performance is reviewed and what happens when a service target is missed. Good communication includes explaining a problem before it becomes a surprise."
        ]
      ],
      [
        "Keep the provider connected to the business",
        [
          "A strong partner learns which systems are mission-critical, what downtime costs, and who approves changes. They coordinate with software vendors, internet providers, facilities, insurers, and internal staff while keeping responsibility for each action clear.",
          "Review the relationship on a regular cadence. Look at issue trends, security actions, major changes, budget forecasts, and user feedback together. If the only meaningful contact is when an employee has a problem, the service may be reactive even if monitoring tools are installed."
        ]
      ]
    ],
    "takeaway": "Evaluate an IT firm by what it prevents, documents, plans, and communicates as well as how it handles tickets. Ask for specific examples and written service boundaries."
  },
  "edr-and-mdr": {
    "lead": "Endpoint detection and response (EDR) collects activity from computers and servers and helps investigate or contain suspicious behavior. Managed detection and response (MDR) adds a human monitoring and response service. The names vary by vendor, so compare actual coverage and responsibility rather than the label.",
    "sections": [
      [
        "What EDR contributes",
        [
          "An EDR agent can record processes, connections, and other endpoint activity, identify suspicious patterns, and support actions such as isolating a device. This gives responders more evidence than a basic signature scan, but it cannot guarantee that every threat will be detected.",
          "Coverage depends on what devices are enrolled, whether the agent is healthy, what operating systems are supported, and how alerts are configured. Inventory endpoints, verify reporting, and monitor devices that cannot run the selected tool."
        ]
      ],
      [
        "What MDR adds",
        [
          "An MDR provider may review alerts, investigate activity, contact your organization, and guide or perform containment under an agreed authorization. Ask whether analysts work continuously, what response is included, which events trigger a call, and how quickly the provider expects your team to act.",
          "Agree on permissions before an incident. Decide whether responders can isolate a laptop, disable an account, or block a network connection without approval. Define who is reachable after hours and who owns restoration, legal decisions, customer communications, and insurer contact."
        ]
      ],
      [
        "Verify the operating model",
        [
          "Review a sample incident report and escalation workflow. Ask what telemetry is retained, how long it remains available, what integrations are required, how false positives are handled, and what happens when a vendor’s platform or your internet connection is unavailable.",
          "Test response with a tabletop exercise or controlled alert. Confirm that a real person receives the escalation, knows the business context, and can reach the decision-maker. Include EDR/MDR in the broader program with MFA, patching, least privilege, backups, and incident response."
        ]
      ]
    ],
    "takeaway": "EDR is a technology layer; MDR is a service model whose precise duties vary. Confirm endpoint coverage, analyst availability, response authority, escalation timing, and how the service fits your incident plan."
  },
  "unique-passwords": {
    "lead": "A unique password for every account limits the damage when a website or vendor is breached. If the same password protects email, banking, and a low-priority website, an attacker may try the exposed credential everywhere. A password manager makes unique credentials manageable for a team.",
    "sections": [
      [
        "Why reuse creates risk",
        [
          "Attackers routinely test leaked username and password combinations against other services. This credential-stuffing attack can succeed even when the business account itself was never breached. Shared accounts create another problem: it can be difficult to tell who accessed a system or remove one person’s access.",
          "Start with email, remote access, financial systems, administrator accounts, and software that stores sensitive data. Use a different long password for each service, and prioritize accounts with high business impact or access to password reset workflows."
        ]
      ],
      [
        "Set up a team manager safely",
        [
          "Select a reputable business password manager with individual accounts, multifactor authentication, administrative recovery, access groups, and audit history. Assign an owner and at least one backup administrator, then define how shared vendor credentials are stored and who can retrieve them.",
          "Move credentials in priority order and remove old copies from spreadsheets, documents, chats, and personal vaults. Replace shared credentials with named accounts where possible. When sharing cannot be avoided, restrict the vault entry to people with a current need and record access."
        ]
      ],
      [
        "Protect recovery and employee changes",
        [
          "Secure the password manager itself with a strong unique master credential and MFA, and store emergency recovery material in an approved protected location. Test the recovery process with a backup administrator before a resignation or outage makes access urgent.",
          "During onboarding and offboarding, grant or revoke vault access alongside other system permissions. Rotate a shared credential if an authorized user leaves or exposure is suspected. Review the manager’s access reports and educate staff to report phishing rather than approving unexpected sign-in prompts."
        ]
      ]
    ],
    "takeaway": "Unique passwords reduce the reach of a stolen credential. Use a managed vault with MFA, named user accounts, recovery ownership, and an offboarding process."
  },
  "passkeys": {
    "lead": "Passkeys replace a typed password with a cryptographic credential stored on a device or security key. A sign-in is approved with a device PIN or biometric, and the website receives proof from the passkey rather than a reusable secret. This can make phishing harder, but rollout and recovery still need planning.",
    "sections": [
      [
        "How passkeys differ from passwords",
        [
          "A passkey is created for a specific service and is designed not to be submitted to a look-alike website. That origin binding helps prevent credential theft through fake login pages. Depending on the platform, passkeys may be synced across a user’s devices or stored on a hardware security key.",
          "Passkeys do not remove every risk. A compromised device, weak account-recovery process, or social engineering of an administrator can still create problems. Keep software updated, protect the device, and use strong identity checks for account recovery and support requests."
        ]
      ],
      [
        "Plan for devices and recovery",
        [
          "Inventory the services your organization uses and verify which support passkeys, which device types are supported, and how administrators enroll them. Pilot with a small group and write down what happens when someone loses a phone, replaces a laptop, or changes roles.",
          "Offer at least one managed recovery path, such as a second registered device or approved hardware key, and test it before making passkeys mandatory. Set clear rules for lost keys, device wipe, employee departure, and helpdesk identity verification. Avoid a process that relies on bypassing security whenever a user is locked out."
        ]
      ],
      [
        "Roll out with layered controls",
        [
          "Explain to employees what a legitimate passkey prompt looks like and how to cancel unexpected approval requests. Maintain MFA and other controls during transition where appropriate; some services may use passkeys as one authentication factor within a larger sign-in policy.",
          "Review available authentication and sign-in reports, measure adoption, and investigate unusual recovery events. Give priority to high-value administrator, email, and remote access accounts, then extend the approach as your applications and support process are ready."
        ]
      ]
    ],
    "takeaway": "Passkeys can make phishing-resistant sign-in easier, but the business needs a recovery plan and clear device policies. Pilot supported services and test lost-device scenarios before expanding."
  }
});

Object.assign(articles, {
  "managed-it-contract": {
    "lead": "A managed IT contract defines what the provider will operate, how support is delivered, what the client must provide, and how either side can end the relationship. Read the agreement alongside its service schedule, security terms, project rates, and exit provisions so the monthly fee is not mistaken for unlimited coverage.",
    "sections": [
      [
        "Define covered users, devices, and service hours",
        [
          "The scope should say which people, locations, workstations, servers, and cloud services are covered. Ask how new employees, seasonal staff, acquired locations, or newly introduced applications affect pricing and support. Vague phrases such as “all IT support” can leave important gaps when the environment changes.",
          "Confirm the support channels, service hours, emergency path, and definitions of response versus resolution. A response target usually describes when work is acknowledged, not when a complex issue will be fixed. Ask how priority is set, who can escalate, and what support is available outside normal hours."
        ]
      ],
      [
        "Identify security and project boundaries",
        [
          "Look for the recurring work included in the service: monitoring, patching, endpoint protection, account administration, backup oversight, documentation, and regular reporting. For each control, clarify whether the provider configures it, monitors it, investigates alerts, or only advises the client.",
          "Separate support from projects and variable charges. Hardware, software subscriptions, migrations, cabling, onsite work, after-hours effort, third-party vendor fees, and remediation of inherited problems may be billed separately. Ask for examples of common out-of-scope work and the approval process before charges accrue."
        ]
      ],
      [
        "Review accountability and exit rights",
        [
          "Check client responsibilities, data handling, confidentiality, insurance, subcontractors, renewal terms, annual increases, liability limits, and security incident cooperation. Review the master agreement and any service attachments together; a sales proposal may not override contract language.",
          "Plan for the end of the relationship before signing. Confirm notice requirements, termination fees, access to documentation and configurations, return or deletion of data, transfer of licenses, and transition assistance. Ask the provider to explain clauses in plain language and consult counsel for legal advice."
        ]
      ]
    ],
    "takeaway": "A good managed IT contract makes scope, charges, responsibilities, security duties, and exit steps understandable. Compare the contract and its attachments with the promises made during sales."
  },
  "questions-for-an-msp": {
    "lead": "An MSP evaluation should reveal how the provider will work with your people, protect critical systems, and take responsibility when an issue crosses vendors or technologies. Ask for evidence and examples, then compare the answers with your organization’s operating needs.",
    "sections": [
      [
        "Test the service model",
        [
          "Ask who will handle day-to-day support, how to submit a request, what hours apply, and how urgent issues are escalated. Request the written definitions of response and resolution targets, and ask how performance is measured and reported.",
          "Ask what happens during onboarding and who owns each discovery task. A provider should be able to describe how they collect asset information, secure administrative access, verify backups, document known risks, and bring users into the support process without disrupting normal work."
        ]
      ],
      [
        "Examine security and recovery capabilities",
        [
          "Ask which security controls are included and which are optional: MFA, endpoint protection, patching, email security, managed detection, backup, and incident response. Request clarity on monitoring coverage, alert review, notification timing, and who has authority to isolate a device or disable an account.",
          "Ask for a recent example of a recovery exercise or incident response workflow. Find out how restore tests are documented, what the provider needs from your team, and who contacts the insurer, legal counsel, vendors, and leadership during an incident."
        ]
      ],
      [
        "Check fit and accountability",
        [
          "Ask how recommendations become a budgeted roadmap, how the provider handles recurring issues, and whether you will have a named account contact. Request a sample report with open risks, completed work, lifecycle needs, decisions, and owners rather than only ticket counts.",
          "Understand pricing, exclusions, renewal changes, contract terms, and transition assistance. Speak with a comparable customer if possible, and notice whether answers are direct and specific. The strongest proposal is the one that makes responsibilities and tradeoffs clear for your environment."
        ]
      ]
    ],
    "takeaway": "Ask an MSP for written scope, a real onboarding plan, evidence of security and recovery operations, and a sample business review. Specific answers make proposals easier to compare."
  },
  "outgrown-computer-guy": {
    "lead": "Informal computer help can work when a business is small and its technology needs are simple. Warning signs appear when one person’s availability, undocumented knowledge, or limited capacity becomes a bottleneck for security, growth, compliance, and reliable day-to-day operations.",
    "sections": [
      [
        "Notice when support depends on one person",
        [
          "If the only technician knows administrator passwords, vendor contacts, network layout, and backup steps, the business carries a continuity risk. Ask what happens when that person is sick, unavailable, or no longer engaged. Essential access and instructions should be held by the organization in a secure, documented place.",
          "Watch for repeated emergencies, unresolved root causes, delayed onboarding or offboarding, and devices that are not patched or inventoried. A support arrangement should make work visible and prioritize issues; relying on personal texts or memory makes it hard to know what is outstanding."
        ]
      ],
      [
        "Look for gaps beyond troubleshooting",
        [
          "As the business grows, technology work expands into identity management, endpoint standards, cloud configuration, cybersecurity, backup testing, vendor coordination, and lifecycle budgeting. A single skilled technician may not have time or depth across every area the company depends on.",
          "Insurance applications, customer requirements, or regulation may also require evidence of controls, documented responsibilities, and recovery planning. If leadership cannot answer who owns these areas or how they are tested, the support model may not match the organization’s risk."
        ]
      ],
      [
        "Choose a model that preserves useful context",
        [
          "Write down the users, systems, incidents, vendor dependencies, and business priorities before comparing options. A managed provider, internal hire, or co-managed arrangement can each work; compare coverage, expertise, accountability, and total cost against actual needs.",
          "Protect continuity during any transition. Verify administrator access, device and software inventory, backups, open issues, and critical vendor relationships. Keep the existing helper involved where appropriate, and make clear who owns each task while the new support model is established."
        ]
      ]
    ],
    "takeaway": "The signal is not business size alone; it is whether support capacity, documentation, security, and continuity still fit how the organization operates. Identify gaps before choosing a new model."
  },
  "what-is-a-vcio": {
    "lead": "A virtual CIO (vCIO) provides technology leadership on a part-time or shared basis. The role helps business leaders connect infrastructure, cybersecurity, budgets, and projects to business priorities without assuming that every organization needs a full-time CIO.",
    "sections": [
      [
        "What the role should deliver",
        [
          "A vCIO learns the organization’s goals, critical workflows, current systems, risk tolerance, and budget cycles. From that picture, they can develop a prioritized roadmap, explain major risks, forecast lifecycle investment, and help sequence projects around staffing and operational constraints.",
          "Useful work includes reviewing technology decisions, coordinating vendors, translating security findings for leadership, planning capacity, and tracking progress. The vCIO should leave decisions and assumptions documented so business leaders can understand why a recommendation was made."
        ]
      ],
      [
        "Where a vCIO fits with IT support",
        [
          "The role is strategic, but it depends on reliable operational information. Support staff or an MSP provide ticket trends, asset status, security findings, backup test results, and project estimates. A vCIO can help connect these details to business impact and investment choices.",
          "Agree whether the vCIO is advisory or has delegated decision-making authority. Clarify who approves purchases, directs staff, handles incident decisions, and owns delivery. Without that boundary, strategy meetings can create recommendations that no one has the time or authority to complete."
        ]
      ],
      [
        "Know when it may be valuable",
        [
          "A vCIO can help when technology spending is reactive, leadership lacks a roadmap, compliance expectations are changing, the company is growing, or internal IT needs executive-level support. The value should be judged by clearer decisions, reduced surprises, and progress on agreed outcomes.",
          "Set a regular cadence and success measures: roadmap completion, risk closure, budget accuracy, project outcomes, and leadership satisfaction. Revisit priorities when the business changes. A vCIO should be able to explain what work is out of scope and how the role coordinates with technical teams."
        ]
      ]
    ],
    "takeaway": "A vCIO adds structured technology leadership and planning. Define decision authority, deliverables, cadence, and measures so strategy translates into completed work."
  },
  "co-managed-it": {
    "lead": "Co-managed IT pairs an organization’s internal technology staff with an outside provider. It works best when each side contributes clear strengths and the arrangement defines ownership, communication, access, and escalation before shared work begins.",
    "sections": [
      [
        "Decide what stays in-house",
        [
          "Internal staff often hold valuable business context and relationships. They may retain ownership of user communication, application support, business-specific systems, or project coordination, while an MSP supplies after-hours coverage, security tools, specialized expertise, or additional hands.",
          "Map responsibilities by task rather than by broad labels. For example, identify who manages identity changes, approves access, investigates endpoint alerts, restores files, contacts vendors, and communicates with leadership. Shared responsibility without a named decision-maker can leave work untouched."
        ]
      ],
      [
        "Build a shared operating model",
        [
          "Choose a common ticketing and documentation process. Define which work must be recorded, how priorities are assigned, when one team hands an issue to the other, and how status is shared. Confirm both teams can access current network diagrams, vendor records, and recovery procedures.",
          "Set boundaries around administrator privileges and security actions. Agree in advance on who can isolate a device, disable a user, change firewall settings, or approve a production change. Use named accounts and review access periodically rather than sharing credentials."
        ]
      ],
      [
        "Review whether the partnership is balanced",
        [
          "Measure unresolved work, response handoffs, recurring incidents, project completion, security gaps, and internal team capacity. Hold regular planning sessions where both groups raise risks and agree what will be delivered, by whom, and by when.",
          "Revisit the arrangement when staffing, systems, or business priorities change. Co-managed service should reduce bottlenecks and extend capability, not create parallel tools or conflicting instructions. Make it easy to adjust responsibilities without losing continuity."
        ]
      ]
    ],
    "takeaway": "Co-managed IT succeeds when internal context and outside capacity work through one agreed process. Write down task ownership, escalation, access rights, and review measures."
  },
  "msp-vs-internal-it": {
    "lead": "Comparing an MSP with an internal IT hire requires more than setting a monthly service fee beside a salary. The real decision is how the organization will provide coverage, expertise, accountability, continuity, and strategic capacity at its current stage.",
    "sections": [
      [
        "Calculate the full internal cost",
        [
          "Include salary, payroll taxes, benefits, recruiting, onboarding, training, equipment, management time, and ongoing certifications. Add the tools and services the employee needs for endpoint management, security monitoring, backups, ticketing, and documentation.",
          "Consider coverage and concentration risk. One employee cannot always provide simultaneous support, security response, project delivery, vacation coverage, and after-hours availability. A backup plan may require cross-training, another hire, or an outside service."
        ]
      ],
      [
        "Compare capability and service boundaries",
        [
          "An internal employee brings context and can be close to daily operations, but may have limited depth in specialized security, networking, cloud, compliance, or recovery. An MSP may offer a broader team and operating platform, but must learn the business and may define certain projects or onsite work as extra.",
          "Compare response channels, service hours, escalation, onsite availability, strategic planning, and who owns vendors. Ask each option to describe the same scenarios, such as onboarding a new location, responding to a compromised mailbox, or restoring a critical system."
        ]
      ],
      [
        "Consider a blended model",
        [
          "Many organizations benefit from an internal technology owner who understands staff and business workflows, supported by an MSP for monitoring, security, expertise, and coverage. The internal role can coordinate priorities while an outside team contributes specialized tools and capacity.",
          "Model options against realistic headcount and growth plans. Revisit the decision annually or after a major change. Compare outcomes and total cost, including downtime, management effort, risk, and project delay, rather than choosing solely from the lowest direct labor estimate."
        ]
      ]
    ],
    "takeaway": "Choose the model that supplies the coverage and skills your business actually needs. Compare full costs, service scenarios, continuity, and accountability, and consider a hybrid option."
  },
  "it-onboarding-transition": {
    "lead": "An IT onboarding or provider transition is a controlled transfer of knowledge, access, monitoring, and support responsibilities. The aim is to make the environment safer and more understandable while users continue working, not to change every system on day one.",
    "sections": [
      [
        "Before the transition",
        [
          "Name a business sponsor and technical contacts, agree on the scope, and create an inventory of users, devices, sites, applications, vendors, and critical workflows. Identify contract dates, license ownership, administrator accounts, and systems whose outage would stop operations.",
          "Coordinate with the outgoing provider when possible. Request documentation, backup status, network details, open tickets, asset records, vendor credentials, and current configurations. Validate that the client controls its own domains, tenant, licenses, and critical accounts before ending access."
        ]
      ],
      [
        "Discover and stabilize",
        [
          "Prioritize secure access, MFA, endpoint visibility, backup health, patch status, email protections, and incident contacts. Check that monitoring agents report correctly and that alert ownership is clear. Address urgent exposure first, while recording inherited risks rather than making unplanned changes.",
          "Document network diagrams, service dependencies, vendor contacts, support procedures, device standards, and recovery steps. Communicate how employees submit requests, what counts as urgent, and what information to include. Keep the transition channel simple so users know where to go for help."
        ]
      ],
      [
        "Establish the next operating rhythm",
        [
          "During the first 30 days, confirm inventory and access, investigate major risks, and stabilize support. By 60 days, prioritize remediation and lifecycle needs. By 90 days, review what is complete, what remains, and which roadmap outcomes should be funded next.",
          "Track ownership, dates, blockers, and evidence for each transition task. Test file or system recovery and confirm escalation contacts can be reached. A transition is complete when the business knows who operates each service and how to make decisions, not merely when new tools are installed."
        ]
      ]
    ],
    "takeaway": "Treat onboarding as a staged handoff with clear ownership. Secure access and continuity first, document the environment, communicate the support process, and review progress at 30, 60, and 90 days."
  },
  "backups-small-business": {
    "lead": "A small-business backup strategy protects the data and systems the organization needs to keep operating. It should define what is copied, how often, where copies are stored, who can alter them, how long they are kept, and how the business will restore work.",
    "sections": [
      [
        "Decide what must be recoverable",
        [
          "Inventory file repositories, email, accounting and line-of-business applications, virtual machines, databases, cloud workloads, and device data. Identify which information is managed by a SaaS vendor and what that vendor’s retention or recovery promises actually cover.",
          "Ask business owners how much recent work they can afford to lose and how long they can be without each system. These recovery point and recovery time expectations help set backup frequency, retention, and restoration priorities. Not every application needs identical protection."
        ]
      ],
      [
        "Protect copies from the same failure",
        [
          "A backup should be separate enough from production that accidental deletion, compromised credentials, hardware failure, or ransomware cannot erase every copy. Use least-privilege access, multifactor authentication, protected retention, and an independent copy appropriate to the business’s risks.",
          "Understand what is included in a backup service and what is not. Confirm coverage for cloud data, configuration, permissions, retention, and large restores. Review alert routing so failed jobs reach an owner who can investigate, rather than remaining unnoticed in a console."
        ]
      ],
      [
        "Test recovery and keep evidence",
        [
          "Restore representative files and systems on a schedule. Check the recovered data, permissions, dependencies, and time required. A completed backup job does not prove that the business can restore a usable system within its expected window.",
          "Document test results, gaps, owners, and corrective dates. Practice who approves a restore, who communicates an outage, and how users continue critical work. Update the plan after adding a location, application, or large data set and after any real recovery event."
        ]
      ]
    ],
    "takeaway": "Backup success means the organization can restore the right data within an agreed time. Inventory critical systems, protect copies, route failures to an owner, and practice recovery."
  },
  "network-security-small-business": {
    "lead": "Small-business network security is about controlling which devices and people can connect, limiting what they can reach, keeping equipment maintained, and noticing unusual behavior. A secure design begins with an inventory and sensible boundaries rather than simply buying a new firewall.",
    "sections": [
      [
        "Know what is on the network",
        [
          "Inventory internet circuits, firewalls, switches, wireless access points, servers, workstations, printers, cameras, building systems, and remote-access tools. Identify device owners, business purpose, firmware support, and which vendor can administer each device.",
          "Change default credentials, restrict management access, disable unused services, and keep configuration backups. Apply firmware updates through a process that considers compatibility and outage windows. Unsupported equipment should have an owner and replacement plan instead of remaining invisible."
        ]
      ],
      [
        "Limit access and contain problems",
        [
          "Separate guest Wi-Fi and devices that do not need access to business systems. Use secure wireless settings and unique administrator credentials. Restrict remote access to authorized users and managed methods; avoid exposing administration interfaces directly to the public internet.",
          "Use least privilege and monitoring so one compromised endpoint cannot freely reach every device. Log important changes and review firewall, wireless, and remote-access accounts periodically. Consider how vendors receive temporary access and remove it promptly when work ends."
        ]
      ],
      [
        "Plan for outages and suspicious activity",
        [
          "Document internet, firewall, switch, and wireless dependencies. Keep circuit and support contacts available, and decide whether a backup connection is necessary for phones or cloud applications. Test failover instead of assuming a second connection will work during an outage.",
          "Define who reviews alerts, investigates an unknown device, and contacts staff if network access is restricted. Preserve relevant logs during an incident and coordinate with endpoint security and backups. Review network design after adding cameras, a new location, or a major cloud service."
        ]
      ]
    ],
    "takeaway": "Start network security with an accurate device inventory, supported equipment, restricted administration, and defined segments. Document response and test connectivity assumptions."
  },
  "it-support-kokomo": {
    "lead": "Choosing IT support in Kokomo is a practical decision about response coverage, maintained systems, cybersecurity, and who coordinates onsite work and vendors. A local relationship can help with context, but the service plan should also explain remote support, responsibilities, recovery, and how the provider communicates.",
    "sections": [
      [
        "Match support to the local operation",
        [
          "List your Kokomo locations, operating hours, user count, critical applications, internet circuits, and any production or customer-facing systems. Note where an onsite visit is essential and which issues can be handled remotely. Do not assume every organization has the same service needs because it shares a city.",
          "For businesses with multiple facilities or remote employees, check how support works across addresses and whether the provider can coordinate with internet, software, copier, phone, and building vendors. Ask who stays accountable when the cause sits with a third party."
        ]
      ],
      [
        "Compare security and continuity",
        [
          "Ask how devices are inventoried, patched, protected, and retired. Confirm MFA coverage, administrator account ownership, backup scope, restore testing, alert review, and incident escalation. Request evidence of completed work and a clear list of inherited risks instead of relying on broad assurances.",
          "Establish realistic priorities for recovery. Identify the systems that affect revenue, customer service, safety, or regulated data, then determine the acceptable data loss and downtime for each. Ensure insurance and leadership contacts can be reached if an incident happens after hours."
        ]
      ],
      [
        "Set expectations before signing",
        [
          "Review the support hours, emergency path, response targets, project rates, onsite charges, exclusions, contract term, and transition assistance. Ask for a sample monthly report and onboarding milestones. Confirm the organization owns its domains, cloud tenants, licenses, administrative identities, and documentation.",
          "Begin with a discovery conversation and a short prioritized plan. The first steps might be closing critical access gaps, testing backups, documenting vendors, or planning replacements. Revisit results regularly and update the roadmap as your Kokomo operation changes."
        ]
      ]
    ],
    "takeaway": "Choose IT support in Kokomo by checking the details of scope, onsite coordination, security operations, recovery, and transition. Ask how the provider will show progress over time."
  }
});

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


import {Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {User} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [
    new Task("u1", "Budget planning", "Review and finalize Q4 budget"),
    new Task("u1", "Meeting preparation", "Prepare slides for Monday's meeting"),
    new Task("u2", "Code review", "Review John's latest pull request"),
    new Task("u2", "UI Design", "Design mockups for the new feature"),
    new Task("u3", "Database optimization", "Optimize the user data queries"),
    new Task("u3", "Server maintenance", "Schedule downtime for server updates"),
    new Task("u4", "Client call", "Discuss project updates with client ABC"),
    new Task("u4", "Contract review", "Review the new client's contract"),
    new Task("u5", "Bug fixing", "Fix the login error on the mobile app"),
    new Task("u5", "Feature brainstorming", "Brainstorm ideas for the new app feature"),
    new Task("u6", "Social media strategy", "Plan content for next month's social media"),
    new Task("u6", "Analytics report", "Prepare the quarterly analytics report"),
    new Task("u7", "Content writing", "Write a blog post about the latest industry trends"),
    new Task("u7", "Email campaign", "Create and schedule an email campaign"),
    new Task("u8", "Team building", "Organize a team-building exercise"),
    new Task("u8", "Performance reviews", "Conduct annual performance reviews"),
    new Task("u9", "Market research", "Research trends in the new target market"),
    new Task("u9", "Competitor analysis", "Analyze the latest competitor strategies"),
    new Task("u10", "Inventory check", "Review and restock office supplies"),
    new Task("u10", "Vendor meeting", "Discuss pricing with the new vendor"),
    new Task("u11", "User feedback", "Collect and analyze user feedback on recent update"),
    new Task("u11", "Survey creation", "Create and distribute a customer satisfaction survey"),
    new Task("u1", "Product demo", "Prepare a demo for the upcoming product release"),
    new Task("u1", "Team meeting", "Schedule and facilitate weekly team meeting"),
    new Task("u2", "Research documentation", "Document findings from the latest research"),
    new Task("u2", "API development", "Develop a new API endpoint for the app"),
    new Task("u3", "Security audit", "Conduct a security audit of the application"),
    new Task("u3", "Backup systems", "Ensure all critical data is backed up"),
    new Task("u4", "Event planning", "Plan the annual company event"),
    new Task("u4", "Press release", "Draft a press release for the new product"),
    new Task("u5", "User training", "Create a training program for new users"),
    new Task("u5", "Customer support", "Resolve tickets from the past week"),
    new Task("u6", "Ad campaign", "Design and launch a new ad campaign"),
    new Task("u6", "SEO optimization", "Optimize the company website for search engines"),
    new Task("u7", "Partnership proposal", "Draft a proposal for a potential partner"),
    new Task("u7", "Survey analysis", "Analyze results from the customer survey"),
    new Task("u8", "Policy update", "Update the company's remote work policy"),
    new Task("u8", "Benefits review", "Review and update employee benefits"),
    new Task("u9", "Sales report", "Compile and analyze the monthly sales report"),
    new Task("u9", "Lead generation", "Create a strategy for generating new leads"),
    new Task("u10", "Platform migration", "Plan the migration to the new software platform"),
    new Task("u10", "Hardware update", "Evaluate and upgrade office hardware"),
    new Task("u11", "Code refactoring", "Refactor legacy code for better performance"),
    new Task("u11", "Documentation update", "Update the project documentation for the new release"),
    new Task("u1", "Performance benchmarking", "Benchmark the new release against competitors"),
    new Task("u1", "Client onboarding", "Onboard the new client XYZ"),
    new Task("u2", "Feature rollout", "Plan the Q3 feature rollout"),
    new Task("u2", "Bug triage", "Prioritize and address critical bugs reported by users")
  ];

  getTasksByUserId(userId: string): Task[] {
    return this.tasks.filter( t => t.userId === userId );
  }

  removeTask(user: User, task: Task) {
    let index = user.tasks.findIndex( t => t.id === task.id);
    user.tasks.splice(index, 1);
    index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks.splice(index, 1);
  }

  addNewTaskToUser(user: User, task: Task) {
    user.tasks.unshift(task);
    this.tasks.unshift(task);
  }

  getEmptyTask(userId: string): Task {
    return new Task(userId, "","");
  }
}

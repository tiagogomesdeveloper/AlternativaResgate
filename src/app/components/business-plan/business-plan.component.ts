import { Component } from '@angular/core';

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.scss'],
})
export class BusinessPlanComponent {
  sendPlan(value: number) {
    let plan: string = '';
    switch (value) {
      case 1:
        plan = 'PLANO PESSOAL';
        break;
      case 2:
        plan = 'PLANO FAMÍLIA';
        break;
      case 3:
        plan = 'PLANO EMPRESA';
        break;

      default:
        break;
    }

    const msg = `Olá, tenho interesse em contratar o ${plan}.`;
    const whatsappUrl = `https://wa.me/5516997249285?text=${encodeURIComponent(
      msg
    )}`;
    window.open(whatsappUrl, '_blank');
  }
}

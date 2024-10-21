import { Component } from '@angular/core';

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.scss'],
})
export class BusinessPlanComponent {
  services = [
    {
      description: 'Tele Medicina',
      isSelected: false,
    },
    {
      description: 'Agendar remoção básica',
      isSelected: false,
    },
    {
      description: 'Agendar remoção avançada (UTI)',
      isSelected: false,
    },
    {
      description: 'Transporte aéreo médico',
      isSelected: false,
    },
    {
      description: 'Cobertura médica em evento',
      isSelected: false,
    },
    {
      description: 'Aluguel de ambulâncias',
      isSelected: false,
    },
    {
      description: 'Palestras',
      isSelected: false,
    },
    {
      description: 'Treinamentos',
      isSelected: false,
    },
  ];
  sendPlan() {
    const selectedServices = this.services
      .filter((service) => service.isSelected)
      .map((service) => service.description)
      .join(', ');

    if (selectedServices.length === 0) {
      alert('Por favor, selecione pelo menos um serviço.');
      return;
    }

    const msg = `Olá, tenho interesse em contratar os seguintes serviços: ${selectedServices}.`;
    const whatsappUrl = `https://wa.me/5516997249285?text=${encodeURIComponent(
      msg
    )}`;
    window.open(whatsappUrl, '_blank');

    this.services.map((x) => (x.isSelected = false));
  }
}

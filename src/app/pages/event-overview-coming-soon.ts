import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-overview-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex h-screen overflow-hidden bg-main-bg">
      <!-- Sidebar -->
      <div class="hidden lg:flex lg:flex-col lg:w-64 bg-[#1a1d2b] border-r border-[#2d3142]">
        <div class="px-6 py-8">
          <h1 class="text-2xl font-bold text-white tracking-wider">Eventtan</h1>
        </div>
        <nav class="flex-1 px-4 py-6 space-y-2">
          <button
            (click)="navigateToDashboard()"
            class="w-full px-4 py-3 text-left text-white hover:bg-[#2d3142] rounded-lg transition-colors font-medium"
          >
            Dashboard
          </button>
          <button
            (click)="navigateToSetup()"
            class="w-full px-4 py-3 text-left text-white hover:bg-[#2d3142] rounded-lg transition-colors font-medium"
          >
            Event Setup
          </button>
          <button
            class="w-full px-4 py-3 text-left text-white bg-[#2d3142] rounded-lg font-medium"
          >
            Event Overview
          </button>
        </nav>
        <div class="p-4 border-t border-[#2d3142]">
          <button
            (click)="onLogout()"
            class="w-full px-4 py-3 text-left text-white hover:bg-[#2d3142] rounded-lg transition-colors font-medium text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <main class="flex-1 flex flex-col overflow-hidden">
        <header class="h-24 bg-white border-b border-[#ECECEC] px-4 lg:px-8 flex items-center">
          <h1 class="text-2xl font-bold text-[#181C32]">Event Overview</h1>
        </header>

        <div class="flex-1 overflow-auto flex items-center justify-center p-4 lg:p-8">
          <div class="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center border border-[#E9E9E9]">
            <div class="mb-6">
              <svg
                class="w-24 h-24 mx-auto text-primary-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>

            <h2 class="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
              Coming Soon
            </h2>

            <p class="text-lg text-form-gray mb-8">
              The Event Overview feature is coming soon. We're working hard to bring you an enhanced experience.
            </p>

            <button
              (click)="navigateToDashboard()"
              class="inline-block px-8 py-3 bg-primary-blue hover:bg-[#0385b5] text-white font-semibold rounded-lg transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: []
})
export class EventOverviewComingSoonComponent {
  constructor(private router: Router) {}

  navigateToDashboard() {
    const eventId = this.getEventIdFromUrl();
    this.router.navigate([`/event/${eventId}/dashboard`]);
  }

  navigateToSetup() {
    const eventId = this.getEventIdFromUrl();
    this.router.navigate([`/event/${eventId}/setup`]);
  }

  onLogout() {
    this.router.navigate(['/']);
  }

  private getEventIdFromUrl(): string {
    const urlParts = window.location.pathname.split('/');
    return urlParts[2] || '';
  }
}

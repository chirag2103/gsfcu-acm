import React from "react";
import Navbar from "../Navbar";

const EventInfo = () => {
    return (
      <>
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          <header className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-24">
            <div class="text-primary-foreground py-12 md:py-20 lg:py-24">
              <div class="container mx-auto flex items-center justify-between px-4 md:px-6">
                <div class="flex flex-col gap-10 md:gap-12 md:flex-row w-full">
                  <div class="space-y-4 md:w-1/2">
                    <h1 class="mt-10 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      ACM Inaugural Event
                    </h1>
                    <p class="text-lg md:text-xl">
                      August 1, 2024 | FertilizarNagar Auditorium
                    </p>
                    <div class="mt-5 text-white inline-block rounded-lg bg-acm-blue px-3 py-1 text-sm">
                      Association for Computing Machinery
                    </div>
                    <p class="max-w-[600px] text-primary-foreground/90 md:text-xl">
                      Join us for the ACM event, where industry leaders and
                      innovators come together to share insights, network, and
                      explore the latest advancements in computing.
                    </p>
                  </div>
                  <div class="ml-10 flex justify-center md:w-1/2">
                    <img
                      width="350"
                      height="350"
                      alt="poster"
                      src="../Seminar_1.png"
                      class="inline-block rounded-lg :max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="container px-4 md:px-6">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    ACM Inaugural Event
                  </h1>
                  <p className="text-lg md:text-xl">
                    August 1, 2024 | FertilizarNagar Auditorium 
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className="inline-block rounded-lg bg-primary-foreground/10 px-3 py-1 text-sm">
                    Association for Computing Machinery
                  </div>
                  <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                    Join us for the annual ACM event, where industry leaders and
                    innovators come together to share insights, network, and
                    explore the latest advancements in computing.
                  </p>
                </div>
              </div>
            </div> */}
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-20 lg:py-24">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Event Details
                    </h2>
                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Description</h3>
                        <p className="items-center justify-content text-muted-foreground">
                          The upcoming event promises to expand your horizons in
                          the transformative fields of Artificial Intelligence
                          and Data Science. Join us for insightful discussions
                          and thought provoking presentations from two
                          distinguished speakers, each bringing a wealth of
                          knowledge and unique perspective on pressing topics in
                          technology.
                        </p>
                      </div>
                      <div class="mt-6 flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-6 text-[#0077b6]"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <p>August 1, 2024</p>
                      </div>
                      <div class="mt-2 flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-6 w-6 text-[#0077b6]"
                        >
                          <line x1="2" x2="5" y1="12" y2="12"></line>
                          <line x1="19" x2="22" y1="12" y2="12"></line>
                          <line x1="12" x2="12" y1="2" y2="5"></line>
                          <line x1="12" x2="12" y1="19" y2="22"></line>
                          <circle cx="12" cy="12" r="7"></circle>
                        </svg>
                        <p>FertilizarNagar Auditorium , GSFC , Vadodara</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Agenda</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>
                            <div className="flex items-center justify-between">
                              <span>TO be declared Soon</span>
                              <span>9:00 AM - 3:00 PM</span>
                            </div>
                            <p></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Speakers
                    </h2>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-start gap-4">
                        <div>
                          <span class="relative flex h-150 w-150 shrink-0 overflow-hidden rounded-full">
                            <img
                              class="aspect-square h-full w-full"
                              src="/pk_guru.png"
                            />
                          </span>
                          <h3 className="text-lg font-semibold">
                            Dr. Ponnurangam Kumaraguru
                          </h3>
                          <p className="text-muted-foreground">
                            Vice President of ACM India
                          </p>
                          <p className="justify-content">
                            Dr. Ponnurangam Kumaraguru ("PK") is a Professor of
                            Computer Science at IIIT-Hyderabad. PK is an ACM
                            India Council Member, currently serving as Vice
                            President and Chair of the Research Facilitation
                            Committee of ACM India. PK received his Ph.D. from
                            the School of Computer Science at Carnegie Mellon
                            University (CMU). His Ph.D. thesis work on
                            anti-phishing research at CMU contributed in
                            creating an award-winning startup. He has
                            co-authored research papers in the field of
                            Computational Social Science, Privacy and Security
                            in Online Social Media, Cyber Security, Social
                            Computing, Data Science for Social Good, amongst
                            others.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div>
                          <span class="relative flex h-150 w-150 shrink-0 overflow-hidden rounded-full">
                            <img
                              class="aspect-square h-full w-full"
                              src="/pk_guru.png"
                            />
                          </span>
                          <h3 className="text-lg font-semibold">
                            Dr. Rutvi Shah
                          </h3>
                          <p className="text-muted-foreground">
                            Chair of ACM India - W Committee
                          </p>
                          <p className="text-muted-foreground">
                            Dr. Rutvi Shah is an Asst. Professor of Computer
                            Science at SVGU, Ahmedabad. Rutvi Shah is currently
                            serving as Chair of ACM India - W Committee, she has
                            been volunteering for ACMI-W since 2015, and has
                            been instrumental in organizing events, conferences,
                            workshops and seminars focused on women in
                            computing. She holds a PhD in Computer Science with
                            research area focused on automated systems for
                            medical image processing. Also, she has undertaken
                            research endeavors encompassing the realm of Data
                            Science, Machine Learning and its affiliated areas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
}

export default EventInfo;
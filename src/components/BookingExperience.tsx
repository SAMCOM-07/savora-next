"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronLeft, Clock3, Users } from "lucide-react";
import { Calendar } from "./ui/Calendar";

const TIMES = [
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-cream placeholder:text-beige-muted focus:border-gold focus:outline-none";

export function BookingExperience() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (step === 4) {
    return (
      <section className="container py-20 lg:py-28">
        <div className="mx-auto max-w-xl rounded-4xl border border-gold/25 bg-ink-card p-10 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
            <CheckCircle2 className="h-9 w-9" />
          </span>
          <p className="mt-7 text-xs uppercase tracking-luxe text-gold">
            Reservation confirmed
          </p>
          <h1 className="mt-3 font-heading text-4xl text-cream">
            We look forward to welcoming you.
          </h1>
          <p className="mt-5 leading-relaxed text-beige-muted">
            Your table for {guests} is reserved for{" "}
            {date
              ? date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })
              : "your selected date"}{" "}
            at {time}. A confirmation has been sent to {email}.
          </p>
          <button
            onClick={() => setStep(1)}
            className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Make another reservation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-center gap-2 sm:gap-5">
          {["Date & guests", "Select time", "Your details"].map(
            (label, index) => (
              <React.Fragment key={label}>
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${step >= index + 1 ? "bg-gold text-ink" : "border border-white/15 text-beige-muted"}`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`hidden text-sm sm:inline ${step >= index + 1 ? "text-cream" : "text-beige-muted"}`}
                  >
                    {label}
                  </span>
                </div>
                {index < 2 && <span className="h-px w-8 bg-white/10 sm:w-16" />}
              </React.Fragment>
            ),
          )}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-ink-card p-6 sm:p-10">
          {step === 1 && (
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <p className="text-xs uppercase tracking-luxe text-gold">
                  Step 1 of 3
                </p>
                <h2 className="mt-3 font-heading text-3xl text-cream">
                  Choose your evening
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-beige-muted">
                  Select your preferred date and the number of guests joining
                  us.
                </p>
                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-sm text-cream">Guests</p>
                      <p className="text-xs text-beige-muted">
                        For parties of 9+, call us
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="rounded-full border border-white/15 p-1.5 text-beige hover:border-gold"
                    >
                      −
                    </button>
                    <span className="w-4 text-center text-cream">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(8, guests + 1))}
                      className="rounded-full border border-white/15 p-1.5 text-beige hover:border-gold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border w-full border-white/10 bg-ink p-4">
                <Calendar selected={date} onSelect={setDate} width="100%" />
              </div>
              <div className="lg:col-span-2 flex justify-end">
                <button
                  disabled={!date}
                  onClick={() => setStep(2)}
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue to time
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="text-xs uppercase tracking-luxe text-gold">
                Step 2 of 3
              </p>
              <h2 className="mt-3 font-heading text-3xl text-cream">
                Choose a seating time
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-beige-muted">
                Dinner service is offered from 5:30 PM. Your table is held for
                15 minutes.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {TIMES.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={`rounded-xl border px-4 py-4 text-sm transition-colors ${time === slot ? "border-gold bg-gold text-ink" : "border-white/10 bg-white/[0.03] text-beige hover:border-gold/50 hover:text-cream"}`}
                  >
                    <Clock3 className="mx-auto mb-2 h-4 w-4" />
                    {slot}
                  </button>
                ))}
              </div>
              <div className="mt-10 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm text-beige hover:text-gold"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button
                  disabled={!time}
                  onClick={() => setStep(3)}
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setStep(4);
              }}
            >
              <p className="text-xs uppercase tracking-luxe text-gold">
                Step 3 of 3
              </p>
              <h2 className="mt-3 font-heading text-3xl text-cream">
                A few final details
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-beige-muted">
                We’ll use these details solely for your reservation
                confirmation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClass}
                  placeholder="Full name"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClass}
                  placeholder="Email address"
                />
                <input
                  required
                  className={inputClass}
                  placeholder="Phone number"
                />
                <select className={inputClass} defaultValue="No occasion">
                  <option className="bg-ink">No occasion</option>
                  <option className="bg-ink">Birthday</option>
                  <option className="bg-ink">Anniversary</option>
                  <option className="bg-ink">Business dinner</option>
                </select>
                <textarea
                  className={`${inputClass} min-h-28 sm:col-span-2`}
                  placeholder="Special requests, allergies or dietary requirements"
                />
              </div>
              <div className="mt-10 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-sm text-beige hover:text-gold"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft">
                  Confirm reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Agentation } from "@/components/playground-kit";
import { cn } from "@/utils/cn";
import "./harbor-pine.css";

export default function HarborPinePage() {
  return (
    <>
      <div className="min-h-screen" style={{ 
        backgroundColor: "var(--hp-bg)", 
        color: "var(--hp-text)",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      }}>
        {/* Header */}
        <header className="sticky top-0 z-50" style={{
          background: "rgba(251, 250, 248, 0.78)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--hp-border)"
        }}>
          <div className="mx-auto" style={{ 
            width: "min(var(--hp-max-width), calc(100% - 48px))" 
          }}>
            <div className="flex items-center justify-between py-[14px] gap-[18px]">
              <div className="font-semibold tracking-wide" style={{ fontWeight: 650, letterSpacing: "0.02em" }}>
                Harbor &amp; Pine
              </div>
              
              <nav className="hidden md:flex gap-[14px] text-sm" style={{ color: "var(--hp-muted)" }} aria-label="Primary">
                <a href="#shop" className="hover:opacity-70 transition-opacity">Shop</a>
                <a href="#story" className="hover:opacity-70 transition-opacity">Our story</a>
                <a href="#sustainability" className="hover:opacity-70 transition-opacity">Sustainability</a>
                <a href="#help" className="hover:opacity-70 transition-opacity">Help</a>
              </nav>
              
              <div className="flex gap-[10px] items-center">
                <a 
                  href="#search" 
                  className="inline-flex items-center justify-center h-[38px] px-[14px] rounded-full text-sm border transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--hp-border)",
                    backgroundColor: "var(--hp-card)",
                    color: "var(--hp-text)"
                  }}
                >
                  Search
                </a>
                <a 
                  href="#cart" 
                  className="hidden sm:inline-flex items-center justify-center h-[38px] px-[14px] rounded-full text-sm border transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--hp-border)",
                    backgroundColor: "var(--hp-card)",
                    color: "var(--hp-text)"
                  }}
                >
                  Cart (0)
                </a>
                <a 
                  href="#shop" 
                  className="inline-flex items-center justify-center h-[38px] px-[14px] rounded-full text-sm transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "var(--hp-accent)",
                    color: "white",
                    border: "1px solid transparent"
                  }}
                >
                  Shop new
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="py-7 pb-3">
            <div className="mx-auto" style={{ width: "min(var(--hp-max-width), calc(100% - 48px))" }}>
              <div className="overflow-hidden" style={{
                border: "1px solid var(--hp-border)",
                borderRadius: "var(--hp-radius)",
                backgroundColor: "var(--hp-card)"
              }}>
                <div className="hp-hero-media" role="img" aria-label="Coastal lifestyle image" />
                
                <div className="p-[18px] pb-[22px] grid lg:grid-cols-[1.2fr_0.8fr] grid-cols-1 gap-[18px]">
                  <div>
                    <h1 className="m-0 font-bold" style={{ 
                      fontSize: "clamp(26px, 2.8vw, 40px)",
                      letterSpacing: "-0.01em",
                      lineHeight: "1.2"
                    }}>
                      Coastal living, simplified.
                    </h1>
                    <p className="mt-2 mb-0 max-w-[60ch]" style={{ 
                      color: "var(--hp-muted)", 
                      fontSize: "16px",
                      lineHeight: "1.5"
                    }}>
                      Small-batch essentials for home and body. Thoughtful materials, quiet design, and
                      an easy, lived-in calm.
                    </p>
                    <div className="flex gap-[10px] flex-wrap mt-[14px]">
                      <a 
                        href="#shop" 
                        className="inline-flex items-center justify-center h-[38px] px-[14px] rounded-full text-sm transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: "var(--hp-accent)",
                          color: "white",
                          border: "1px solid transparent"
                        }}
                      >
                        Shop bedding
                      </a>
                      <a 
                        href="#shop" 
                        className="inline-flex items-center justify-center h-[38px] px-[14px] rounded-full text-sm border transition-opacity hover:opacity-70"
                        style={{
                          borderColor: "var(--hp-border)",
                          backgroundColor: "var(--hp-card)",
                          color: "var(--hp-text)"
                        }}
                      >
                        Shop scent &amp; bath
                      </a>
                    </div>
                  </div>
                  
                  <aside 
                    className="lg:border-l lg:pl-[18px] grid gap-[10px] content-start"
                    style={{ borderColor: "var(--hp-border)" }}
                    aria-label="Brand pillars"
                  >
                    {["Sustainable sourcing", "Small-batch craft", "Coastal simplicity", "Intentional living"].map((pillar) => (
                      <div 
                        key={pillar}
                        className="rounded-full px-3 py-2 text-[13px]"
                        style={{
                          border: "1px solid var(--hp-border)",
                          backgroundColor: "#ffffff",
                          color: "var(--hp-muted)"
                        }}
                      >
                        {pillar}
                      </div>
                    ))}
                  </aside>
                </div>
              </div>
            </div>
          </section>

          {/* Shop by Category */}
          <section className="py-7" id="shop">
            <div className="mx-auto" style={{ width: "min(var(--hp-max-width), calc(100% - 48px))" }}>
              <h2 className="m-0 mb-[14px] text-lg font-semibold" style={{ color: "var(--hp-text)" }}>
                Shop by category
              </h2>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-[14px]">
                <a 
                  href="#textiles" 
                  className="overflow-hidden grid transition-opacity hover:opacity-90"
                  style={{
                    border: "1px solid var(--hp-border)",
                    borderRadius: "var(--hp-radius)",
                    backgroundColor: "var(--hp-card)",
                    minHeight: "220px"
                  }}
                >
                  <div className="hp-tile-textiles" style={{ minHeight: "140px" }} />
                  <div className="p-[14px]">
                    <div className="text-[13px]" style={{ color: "var(--hp-muted)" }}>
                      Home textiles
                    </div>
                    <div className="mt-[6px] text-base font-semibold">
                      Organic linen that feels lived-in from day one
                    </div>
                  </div>
                </a>

                <a 
                  href="#ceramics" 
                  className="overflow-hidden grid transition-opacity hover:opacity-90"
                  style={{
                    border: "1px solid var(--hp-border)",
                    borderRadius: "var(--hp-radius)",
                    backgroundColor: "var(--hp-card)",
                    minHeight: "220px"
                  }}
                >
                  <div className="hp-tile-ceramics" style={{ minHeight: "140px" }} />
                  <div className="p-[14px]">
                    <div className="text-[13px]" style={{ color: "var(--hp-muted)" }}>
                      Handcrafted goods
                    </div>
                    <div className="mt-[6px] text-base font-semibold">
                      Small-run ceramics with quiet, tactile details
                    </div>
                  </div>
                </a>

                <a 
                  href="#bath" 
                  className="overflow-hidden grid transition-opacity hover:opacity-90"
                  style={{
                    border: "1px solid var(--hp-border)",
                    borderRadius: "var(--hp-radius)",
                    backgroundColor: "var(--hp-card)",
                    minHeight: "220px"
                  }}
                >
                  <div className="hp-tile-bath" style={{ minHeight: "140px" }} />
                  <div className="p-[14px]">
                    <div className="text-[13px]" style={{ color: "var(--hp-muted)" }}>
                      Scent &amp; bath
                    </div>
                    <div className="mt-[6px] text-base font-semibold">
                      Clean-burning candles and botanical body care
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="py-7" id="sustainability">
            <div className="mx-auto" style={{ width: "min(var(--hp-max-width), calc(100% - 48px))" }}>
              <h2 className="m-0 mb-[14px] text-lg font-semibold" style={{ color: "var(--hp-text)" }}>
                Trust signals
              </h2>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
                {[
                  "Low-impact dyes and plant-derived ingredients",
                  "Small-batch production with limited runs",
                  "Recycled and compostable packaging",
                  "Easy returns and responsive support"
                ].map((trust) => (
                  <div 
                    key={trust}
                    className="p-3 text-[13px]"
                    style={{
                      border: "1px solid var(--hp-border)",
                      borderRadius: "12px",
                      backgroundColor: "var(--hp-card)",
                      color: "var(--hp-muted)"
                    }}
                  >
                    {trust}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-7" id="story">
            <div className="mx-auto" style={{ width: "min(var(--hp-max-width), calc(100% - 48px))" }}>
              <h2 className="m-0 mb-[14px] text-lg font-semibold" style={{ color: "var(--hp-text)" }}>
                Our story
              </h2>
              <div 
                className="p-4"
                style={{
                  border: "1px solid var(--hp-border)",
                  borderRadius: "var(--hp-radius)",
                  backgroundColor: "var(--hp-card)"
                }}
              >
                <p className="m-0 max-w-[70ch]" style={{ color: "var(--hp-muted)", lineHeight: "1.6" }}>
                  Harbor &amp; Pine makes beautifully simple essentials for home and body—rooted in coastal
                  calm, sustainable sourcing, and small-batch craft. We believe in buying less and buying
                  better.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer 
          className="py-6 pb-10 text-[13px]"
          style={{
            borderTop: "1px solid var(--hp-border)",
            color: "var(--hp-muted)"
          }}
        >
          <div className="mx-auto" style={{ width: "min(var(--hp-max-width), calc(100% - 48px))" }}>
            <div>© Harbor &amp; Pine. Coastal living, simplified.</div>
          </div>
        </footer>
      </div>
      
      <Agentation />
    </>
  );
}

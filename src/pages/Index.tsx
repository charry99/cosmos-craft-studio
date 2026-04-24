import heroImg from "@/assets/hero-web3.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Coins, Globe2, Lock, Sparkles, Wallet, Zap } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-second finality with our high-throughput Layer 2 architecture." },
  { icon: Lock, title: "Audited & Secure", desc: "Smart contracts audited by Trail of Bits and OpenZeppelin." },
  { icon: Coins, title: "Zero Gas Fees", desc: "Trade, swap, and stake without paying a single wei in gas." },
  { icon: Globe2, title: "Cross-Chain", desc: "Native bridges to Ethereum, Solana, Base, and 20+ chains." },
  { icon: Boxes, title: "Composable", desc: "Build on top with our open SDK and on-chain primitives." },
  { icon: Sparkles, title: "AI-Powered", desc: "Smart routing and risk analysis powered by on-chain AI." },
];

const stats = [
  { value: "$4.2B", label: "Total Value Locked" },
  { value: "1.8M+", label: "Active Wallets" },
  { value: "120M", label: "Transactions" },
  { value: "0.001s", label: "Avg Latency" },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary glow-primary" />
            <span>NEXUS</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#stats" className="hover:text-foreground transition-colors">Network</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Build</a>
          </nav>
          <Button variant="outline" className="glass border-primary/30 hover:border-primary hover:bg-primary/10">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              Mainnet v3 is live · 0% fees this week
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              The future of <span className="text-gradient">decentralized</span> finance.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Trade, stake, and build on-chain with zero gas fees. Nexus is the high-performance Web3 protocol powering the next generation of internet money.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 glow-primary h-12 px-8">
                Launch App <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="glass border-border h-12 px-8 hover:border-secondary/50">
                Read Docs
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-10 bg-primary/30 blur-3xl rounded-full" aria-hidden />
            <img
              src={heroImg}
              alt="Glowing crystalline blockchain cube"
              width={1536}
              height={1024}
              className="relative rounded-3xl glass glow-primary"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 border-y border-border/50">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-secondary uppercase tracking-widest mb-4">Why Nexus</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Built for builders. <span className="text-gradient">Designed for scale.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1 group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:glow-primary transition-all">
                  <f.icon className="h-6 w-6 text-primary-glow" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32">
        <div className="container">
          <div className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden glow-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" aria-hidden />
            <div className="relative space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Step into the <span className="text-gradient">on-chain</span> economy.
              </h2>
              <p className="text-muted-foreground text-lg">
                Join 1.8M+ users already building, trading, and earning on Nexus.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground h-12 px-10 glow-primary">
                Connect Wallet <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-secondary" />
            <span>© 2026 Nexus Protocol</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

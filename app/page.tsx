'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Header } from '@/components/ui/header';
import Image from 'next/image';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#00D6ED15_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <motion.div 
          className="container max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            variants={fadeIn}
          >
            Redefining how <span className="text-primary">AI startups</span> are born.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            We orchestrate autonomous agents to transform ideas into AI-native ventures — from zero to scale.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Notify Me
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to building AI startups
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Idea Validation",
                description: "Leverage AI to validate startup concepts against market needs and technical feasibility."
              },
              {
                title: "Agent Orchestration",
                description: "Coordinate autonomous AI agents to execute complex business and development tasks."
              },
              {
                title: "Full-stack Pipelines",
                description: "Build end-to-end technical infrastructure for AI-native products and services."
              },
              {
                title: "GTM Automation",
                description: "Automate go-to-market strategies with AI-driven marketing and sales processes."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Redefynd Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Redefynd?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our unique approach to AI startup incubation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sentient Automation",
                description: "Our AI agents learn, adapt, and evolve to meet the unique needs of each startup venture, creating truly intelligent automation."
              },
              {
                title: "Built for Founders",
                description: "We empower founders to focus on vision and strategy while our AI handles execution, reducing time-to-market and operational overhead."
              },
              {
                title: "Startup-as-a-Service",
                description: "Transform your idea into a fully operational startup with our end-to-end platform that handles everything from development to deployment."
              },
              {
                title: "AI Orchestration Layer",
                description: "Our proprietary orchestration technology coordinates specialized AI agents to work together seamlessly on complex startup tasks."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20 hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Redefynd.ai Logo" 
                  width={150} 
                  height={50} 
                  className="mb-2"
                />
              </div>
              <p className="text-gray-300">Redefining how AI startups are born</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
              <a href="mailto:hello@redefynd.ai" className="text-gray-300 hover:text-primary transition-colors">
                hello@redefynd.ai
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center md:text-left text-gray-400">
            <p>© 2025 Redefynd AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

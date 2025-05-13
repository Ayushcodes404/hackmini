import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const ProblemsPage = () => {
  const categories = [
    { id: 'all', name: 'All Problems' },
    { id: 'Artificial_Intelligence', name: 'Artificial Intelligence' },
    { id: 'webdev', name: 'Web Development' },
  ];  
  const problems = [
    // --- AI Category ---
    {
      id: 1,
      title: 'AI Wellness Companion',
      description: 'Develop an AI-powered chatbot that provides emotional check-ins, mood tracking, and personalized wellness recommendations for users managing daily stress.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 2,
      title: 'Crisis Navigator Bot',
      description: 'Design a chatbot to assist in emergency situations by offering situational advice, connecting people with first responders, and disseminating verified information in real-time.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 3,
      title: 'Smart Budget Coach',
      description: 'Create a chatbot that acts as a personal financial coach—monitoring spending, setting savings goals, and delivering tips to help users achieve financial stability.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 4,
      title: 'Career Path Finder',
      description: 'Design a chatbot that guides users in exploring career options, assessing skills, and recommending learning resources based on their goals and background.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 5,
      title: 'Green Habits Bot',
      description: 'Build a chatbot that helps users adopt sustainable habits by tracking eco-friendly actions, rewarding progress, and offering personalized environmental challenges.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 6,
      title: 'Healthcare Symptom Checker',
      description: 'Build an AI assistant that allows users to input symptoms and receive likely condition suggestions, guidance, and recommendations for care or doctor visits.',
      category: 'Artificial_Intelligence'
    },

    // --- Web Dev Category ---
    {
      id: 7,
      title: 'ZenSpace Timer',
      description: 'Build a calm-focused timer app with customizable meditation and break sessions, ambient soundscapes, and user login using Firebase authentication.',
      category: 'webdev'
    },
    {
      id: 8,
      title: 'ArtBoard Studio',
      description: 'Create a digital sketching tool with layer support, shape tools, and brush effects, with Firebase email/password authentication for project saving.',
      category: 'webdev'
    },
    {
      id: 9,
      title: 'WorkCycle Timer',
      description: 'Develop a Pomodoro-style app with work/rest cycle customization, user streaks, and Firebase-based user authentication.',
      category: 'webdev'
    },
    {
      id: 10,
      title: 'MyCreative Hub',
      description: 'Build a portfolio builder with sections for projects, testimonials, and blog posts, including a Firebase-authenticated admin dashboard for content editing.',
      category: 'webdev'
    },
    {
      id: 11,
      title: 'MovieMatch',
      description: 'Design a film discovery web app with search filters, watchlist functionality, and Firebase login for personalized content tracking.',
      category: 'webdev'
    },
    {
      id: 12,
      title: 'GoalKeeper Tracker',
      description: 'Create a goal-tracking app where users can set, track, and celebrate progress on personal or professional goals. Includes Firebase auth and data persistence.',
      category: 'webdev'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">AI Chatbot Problem Statements</h1>
        <p className="mt-4 text-xl text-muted-foreground">Choose from these impactful challenges for your hackathon project</p>
        <div className="mt-8">
          <a href="/mini_hackathon.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="px-6 py-3 text-lg font-medium">Download General Rule Book</Button>
          </a>
        </div>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap mb-8 h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="mb-2">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems
                .filter(problem => category.id === 'all' || problem.category === category.id)
                .map((problem) => (
                  <Card key={problem.id} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{problem.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProblemsPage;


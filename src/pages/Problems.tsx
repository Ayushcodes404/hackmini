import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProblemsPage = () => {
  const categories = [
    { id: 'all', name: 'All Problems' },
    { id: 'Artificial_Intelligence', name: 'Artificial Intelligence' },
    { id: 'webdev', name: 'Web Development' },
  ];
  
  const problems = [
    {
      id: 1,
      title: 'Mental Health Support Chatbot',
      description: 'Build a chatbot that offers mental health support by providing a safe space for users to share their feelings, access coping strategies, and find mental health resources.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 2,
      title: 'Disaster Response Assistant',
      description: 'Create a chatbot that helps coordinate disaster response efforts by providing real-time updates, connecting volunteers, and guiding affected individuals to safety and resources.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 3,
      title: 'Financial Literacy Chatbot',
      description: 'Develop a chatbot that educates users about personal finance, budgeting, and saving, helping them make informed financial decisions.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 4,
      title: 'Job Preparation Mentor',
      description: 'Build a chatbot that helps job seekers prepare for interviews, improve resumes, and practice common interview questions.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 5,
      title: 'Climate Action Advocate',
      description: 'Create a chatbot that educates users on climate change, provides daily eco-friendly tips, and helps them track their carbon footprint.',
      category: 'Artificial_Intelligence'
    },
    {
      id: 6,
      title: 'Mindful Moments',
      description: 'A responsive meditation timer with ambient sounds and optional guided sessions. Add Firebase email/password login.',
      category: 'webdev'
    },
    {
      id: 7,
      title: 'Digital Sketchbook',
      description: 'An in-browser canvas with brushes, shapes, colors, and eraser tools. Add Firebase email/password login.',
      category: 'webdev'
    },
    {
      id: 8,
      title: 'FocusFlow Pomodoro',
      description: 'Customizable work/break timer with cycle tracking and notifications. Add Firebase email/password login.',
      category: 'webdev'
    },
    {
      id: 9,
      title: 'Showcase Portfolio',
      description: 'A dynamic personal site with interactive sections and an admin area. Add Firebase email/password login.',
      category: 'webdev'
    },
    {
      id: 10,
      title: 'CineFinder',
      description: 'A movie explorer with genre/year/rating filters and a “Watchlist.” Add Firebase email/password login.',
      category: 'webdev'
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">AI Chatbot Problem Statements</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Choose from these impactful challenges for your hackathon project
        </p>
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

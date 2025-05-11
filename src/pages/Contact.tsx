import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const ContactPage = () => {
  const teamMembers = [
    {
      name: 'Shubham Hiremath',
      role: 'Co-ordinator',
      email: 'shubhamhiremath87@gmail.com',
      linkedin: 'https://www.linkedin.com/in/shubham-hiremath-470271300/',
      github: 'https://github.com/ShUbHaMHiReMaT',
      image: '/team/shubham.jpg',
      phone:'9448339846'
    },
    {
      name: 'Suyog Hanamar',
      role: 'Co-ordinator',
      email: 'suyoghanamar21@gmail.com',
      linkedin: 'https://www.linkedin.com/in/suyog-hanamar-57211b300/',
      github: 'https://github.com/SUYOGhanamar',
      image: '/team/suyog.jpg',
      phone:'9986821707'
    },
    {
      name: 'Chirag K',
      role: 'Co-ordinator',
      email: 'ciragmkamble1018@gmail.com',
      linkedin: 'https://www.linkedin.com/in/chirag-kamble-b9aa952bb/',
      github: 'https://github.com/chiragmkamble1018',
      image: '/team/chirag.jpg',
      phone: '9353037921'  // Changed from 'Phone' to 'phone'
    },
    {
      name: 'Ayush Tammannavar',
      role: 'Tech Lead',
      email: 'ayusht@gmail.com',
      linkedin: 'https://linkedin.com/in/ayusht',
      github: 'https://github.com/ayusht',
      image: '/team/ayush.jpg',
      phone: '8861885724'  // Changed from 'Phone' to 'phone'
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-col items-center gap-6 pb-2">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                <p className="text-muted-foreground text-lg">{member.role}</p>
              </div>
            </CardHeader>
            <CardContent className="px-8 py-6">
              <div className="space-y-4">
                {member.phone && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <a href={`tel:${member.phone}`} className="text-base">
                      {member.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <a href={`mailto:${member.email}`} className="text-base">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-base">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Github className="h-5 w-5 text-gray-600" />
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-base">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
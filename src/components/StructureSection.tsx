const StructureSection = () => {
  const hierarchy = [
    {
      level:"Core",
      positions: ["President", "Vice President", "General Secretary", "Joint Secretary"],
      color: "bg-primary",
    },
    {
      level: "Cabinet",
      positions: ["Departmental Head", "Senior Member", "Junior Member", "Assistant"],
      color: "bg-accent",
    },
    
  ];

  const departments = [
    {
      name: "Knowledge and Development",
      description: "Building innovative solutions and technical projects",
      icon: "💻",
    },
    {
      name: "Project and Research",
      description: "Organizing educational events and skill-building workshops",
      icon: "🎯",
    },
    {
      name: "Technical and Creative",
      description: "Promoting club activities and building community presence",
      icon: "📢",
    },
    {
      name: "Organizational and Sponsorship",
      description: "Managing day-to-day activities and administrative tasks",
      icon: "⚙️",
    },
    {
      name: "Editorial and Marketing",
      description: "Managing day-to-day activities and administrative tasks",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Club <span className="text-gradient">Structure</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our organized structure ensures effective leadership and seamless operations across all departments.
          </p>
        </div>
        
        {/* Hierarchy */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Organizational Hierarchy</h3>
          <div className="space-y-8">
            {hierarchy.map((level, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex flex-col items-center">
                  <div className={`${level.color} text-white px-8 py-4 rounded-xl font-semibold text-lg mb-4`}>
                    {level.level}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
                    {level.positions.map((position, posIndex) => (
                      <div 
                        key={posIndex}
                        className="bg-card p-4 rounded-lg card-shadow text-center hover:scale-105 transition-smooth"
                      >
                        <span className="font-medium">{position}</span>
                      </div>
                    ))}
                  </div>
                  {index < hierarchy.length - 1 && (
                    <div className="w-px h-8 bg-border mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Departments */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Departments</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl card-shadow hover:scale-105 transition-smooth animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-primary">{dept.name}</h4>
                <p className="text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
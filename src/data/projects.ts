export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  createdBy: string;
  remixedFrom?: {
    id: string;
    title: string;
  };
}

export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "sarah_dev",
  },
  {
    id: "2",
    title: "Travel App UI",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "ui_master",
    remixedFrom: {
      id: "15",
      title: "Travel App Template",
    },
  },
  {
    id: "3",
    title: "Portfolio Website",
    imageUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "web_wizard",
  },
  {
    id: "4",
    title: "Recipe Social App",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "foodie_dev",
    remixedFrom: {
      id: "16",
      title: "Social Network Template",
    },
  },
  {
    id: "5",
    title: "Fitness Tracker",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "health_coder",
  },
  {
    id: "6",
    title: "Weather Dashboard",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "data_viz",
  },
  {
    id: "7",
    title: "Task Management App",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "productivity_pro",
    remixedFrom: {
      id: "17",
      title: "Todo App Starter",
    },
  },
  {
    id: "8",
    title: "Music Player UI",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "audio_dev",
  },
  {
    id: "9",
    title: "Chat Application",
    imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "messaging_guru",
  },
  {
    id: "10",
    title: "Investment Tracker",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "finance_dev",
  },
  {
    id: "11",
    title: "Educational Platform",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "edu_tech",
    remixedFrom: {
      id: "18",
      title: "Learning Management System",
    },
  },
  {
    id: "12",
    title: "Video Streaming UI",
    imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    createdBy: "streaming_expert",
  },
];

import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages,
    system: `
    Use this as primary source of information. if there is no information available, give the most relevant answer.


    Enhancing Urban Mobility through Mobility as a Service (MaaS) in a Developing Country
Introduction:
In recent years, urban areas in developing countries have experienced rapid population growth and increased congestion, posing significant challenges to transportation systems. To address these challenges, governments and private sector stakeholders are exploring innovative solutions such as Mobility as a Service (MaaS) to improve urban mobility, reduce traffic congestion, and enhance transportation efficiency. This case study examines the implementation of MaaS in a developing country context and outlines the enterprise architecture design for a comprehensive MaaS platform.
Background:
Mobility as a Service (MaaS) is a concept that integrates various modes of transportation into a single, accessible, and user-centric service. It aims to provide seamless and convenient mobility solutions by combining public transit, ride-sharing, bike-sharing, car-sharing, and other modes of transportation through a single digital platform. MaaS platforms typically offer users various services to facilitate multi-modal journeys, including trip planning, booking, ticketing, and payment.
Challenges in the Developing Country Context:
Urban areas in developing countries face unique challenges in transportation, including inadequate infrastructure, limited public transit options, traffic congestion, and air pollution. These challenges are exacerbated by rapid urbanisation, population growth, and economic development. In such contexts, implementing MaaS presents an opportunity to address these challenges by offering affordable, efficient, and sustainable transportation alternatives.
Implementations of Mobility as a Service:
Several implementations of Mobility as a Service can be considered in the context of a developing country:
1. Digital Platform Development: Orange
Develop a comprehensive MaaS platform that integrates various transportation services, including public transit, ride-sharing, bike-sharing, and taxi services.

Design a user-friendly mobile application and web interface that allows users to plan trips, compare options, book services, and make payments seamlessly.
2. Multi-Modal Integration: Pink
Establish partnerships with public transit agencies, private transportation providers, and mobility operators to integrate their services into the MaaS platform.
Implement APIs and data-sharing protocols to enable real-time information exchange and seamless connectivity between different modes of transportation.
3. Payment Integration: Yellow
Implement a unified payment system that allows users to pay for transportation services through the MaaS platform using various payment methods, including mobile wallets, debit/credit cards, and digital vouchers.
Ensure affordability and accessibility by offering flexible pricing models, subsidies for low-income users, and discounts for frequent travellers.
4. Data Analytics and Optimisation: Green
Collect and analyse data on user preferences, travel patterns, traffic conditions, and service utilisation to optimise service offerings, routes, and schedules.
Use predictive analytics and machine learning algorithms to anticipate demand, optimise fleet allocation, and improve operational efficiency.
5. Accessibility and Inclusivity: Peach
Ensure the MaaS platform is accessible to all population segments, including persons with disabilities, seniors, and low-income communities.
Provide accessibility features such as wheelchair-accessible vehicles, real-time service updates, and multilingual support to enhance inclusivity.


    `,
  });

  return new StreamingTextResponse(result.toAIStream());
}

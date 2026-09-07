# Robotics MOBA Competition
## Complete Competition Concept & Preliminary Specification

---

# 1. Introduction

The Robotics MOBA Competition is a team-based physical robotics competition inspired by the strategic structure of Multiplayer Online Battle Arena (MOBA) games, transformed into a **physical cyber-physical game**.

Two teams compete inside a physical arena using custom-built robots.

Each robot represents a champion. The organization provides a standardized **Champion Interface** that connects the team's robot to the game infrastructure and to the physical mechanisms required by its champion.

The teams are responsible for designing the robot itself: its chassis, locomotion, actuators, mechanical structures and the mechanisms that physically execute its abilities.

The central philosophy is:

> **We define the game. You define the robot.**

The objective is not to build identical RC cars. The objective is to create a competition where:

- mechanical engineering;
- electronics;
- embedded software;
- control;
- game strategy;
- teamwork

all directly affect the outcome of the match.

---

# 2. Competition Format

The first edition is designed around:

> **3 vs 3**

Each team simultaneously fields three champions.

The three champions available in the first edition are:

1. **Tank / Support**
2. **Fighter**
3. **Artillery**

The team is free to decide where each champion is deployed.

There is no requirement that a particular champion must play Top, Mid, Bot or Jungle.

The map contains:

- Top lane;
- Mid lane;
- Bottom lane;
- Jungle.

These are strategic areas rather than fixed champion roles.

---

# 3. Champion vs Robot

A fundamental distinction must be made between the **champion** and the **robot**.

The champion is the standardized game entity.

The robot is the team's physical implementation of that champion.

Conceptually:

```text
                 TEAM ROBOT
                     │
              ┌──────┴──────┐
              │             │
        Robot hardware   Champion Interface
              │             │
       motors / actuators   Core
       chassis              │
       mechanics       ┌────┴─────┐
                       │          │
                    Weapon    Photodiode /
                              Light Beam
```

The organization provides the Champion Interface.

The team builds the robot around it.

---

# 4. Champion Interface

The Champion Interface is a standardized hardware assembly supplied by the organization.

It is different for each of the three champion types.

The assembly contains the components required to connect the champion to the physical game mechanics.

A simplified architecture is:

```text
                  ┌──────────────┐
                  │     CORE     │
                  └──────┬───────┘
                         │
                   hard-wired
                         │
              ┌──────────┴──────────┐
              │                     │
           WEAPON              Photodiode /
                               Light Beam
```

The exact contents depend on the champion.

For example, the Artillery interface contains the components required for its launcher interaction, while the Tank/Support interface contains the optical components required for its healing interaction.

The Champion Interface is supplied by the organization **as an assembled unit**.

---

# 5. Organization-Provided Hardware

The organization provides the Champion Interfaces.

Only a small number are required for the competition itself.

For a 3v3 competition:

- **2 Tank interfaces**
- **2 Fighter interfaces**
- **2 Artillery interfaces**

for a total of:

> **6 Champion Interfaces**

The organization can nevertheless manufacture additional units for:

- development;
- testing;
- replacement;
- maintenance;
- demonstrations;
- training.

The interfaces are mounted onto the robots **before the match** and removed **immediately after the match**.

Teams do not permanently own the competition interfaces.

---

# 6. Sealed Hardware Assembly

The internal connections between the components of the Champion Interface are deliberately protected.

The components are carefully wired together by the organization.

For example:

```text
Core ───────── Weapon
 │
 └──────────── Photodiode / Light Beam
```

These connections are considered part of the official competition hardware.

The assembly must not be disassembled.

The interface cannot legally be separated into its components without cutting or modifying the protected wiring.

Any attempt to:

- disconnect components;
- modify the wiring;
- bypass the Core;
- access protected connections;
- replace protected components;
- alter the official interface;

is a violation of the competition regulations.

Such tampering is grounds for **disqualification**.

The hardware should be designed so that unauthorized disassembly or modification can be detected.

The purpose is not to restrict robot engineering.

It is to guarantee that every team competes using the **same standardized game interface**.

---

# 7. What Teams Are Responsible For

The team's robot contains everything necessary to physically operate the Champion Interface.

In particular, the **actuators and mechanisms responsible for moving or operating the weapon are part of the team's robot**.

For example:

```text
Team Robot
     │
     ├── chassis
     ├── motors
     ├── drivetrain
     ├── servo mechanisms
     ├── weapon actuator
     └── mechanical structure
              │
              ▼
      Organization Interface
              │
             Core
```

The organization provides the sensing/electronic interface.

The team decides **how its robot physically moves and operates it**.

This distinction is essential.

For example, the Fighter's IMU belongs to the Champion Interface and measures the movement of the sword.

But the mechanism that actually moves the sword is entirely the team's engineering problem.

This creates the intended relationship:

> **The organization standardizes the measurement. The team engineers the physical action.**

---

# 8. Core

The **Core** is the central component of the Champion Interface.

It connects the standardized interface to the team's robot and to the competition infrastructure.

The Core provides a USB connection to the robot.

The USB connection provides:

### Power

The Core supplies the required energy to the Champion Interface.

The team does not need to independently power the protected interface components.

### Data

The Core exposes data from the Champion Interface to the robot.

The robot communicates with the Core through a documented API.

The exact API is part of the official competition specification.

Conceptually:

```text
               Champion Interface
                       │
                     Core
                       │
                     USB
                       │
                       ▼
                 Team Robot
```

The team therefore interacts with the Champion Interface through a **stable software interface**, rather than manipulating its internal electronics.

---

# 9. Core Communication

The Core also contains wireless communication hardware.

It includes:

- Bluetooth Low Energy (BLE);
- an antenna;
- the required communication electronics.

The Core communicates with the central game server.

The communication system is a critical part of the competition infrastructure.

The priority is:

> **Communication reliability and efficiency.**

A communication failure cannot simply be treated as an ordinary robot failure because the game server is responsible for maintaining the authoritative game state.

Therefore, communication must be designed, tested and monitored as a critical infrastructure component.

The competition should prioritize:

- low latency;
- deterministic behavior;
- robustness;
- efficient bandwidth usage;
- reliable packet delivery;
- failure detection;
- recovery mechanisms.

---

# 10. Champion Interface API

The Core exposes an official API to the robot.

The API defines the communication between:

> **Team Robot ↔ Champion Interface**

The API should provide the team with all information necessary to operate its champion without exposing protected implementation details.

The complete API specification should be published before teams begin serious development.

It should include:

- available commands;
- available sensor data;
- message formats;
- timing;
- error conditions;
- connection behavior;
- limits;
- versioning;
- examples.

This allows teams to develop their robot software independently of the physical competition hardware.

---

# 11. Open-Source Champion Interface

Everything inside the Champion Interface should be **open source**, with one deliberate exception:

> **The competition-time patched token.**

The public components, firmware/software and interface specifications should be available to teams before the competition.

This allows teams to fully understand the system they are integrating with.

The objective is not to create a black box.

The competition interface should be transparent and reproducible.

---

# 12. Team-Owned Test Interfaces

Teams should be able—and are encouraged—to build their own copies of the Champion Interface for development.

The public design allows teams to create:

- test Cores;
- test sensor assemblies;
- test communication interfaces;
- test weapon interfaces;
- software simulators.

This is particularly important because the official competition hardware is only available in limited quantities.

A team should not need to wait for an official interface to become available in order to develop its robot.

The expected development model is therefore:

```text
Official open-source design
          │
          ▼
 Team builds test interface
          │
          ▼
 Robot development
          │
          ▼
 Software testing
          │
          ▼
 Integration with official hardware
          │
          ▼
 Competition
```

---

# 13. Competition-Time Security Token

The Champion Interface contains a competition-specific patched token.

This token is the only part of the interface that is intentionally not public.

Its purpose is to prevent unauthorized hardware from being presented as an official competition interface during a match.

The token can be used to authenticate the physical Champion Interface with the game infrastructure.

Teams should therefore have everything necessary for development without possessing the information required to impersonate an official competition unit.

---

# 14. Tank / Support Champion

The Tank is the team's frontline and protection-oriented champion.

Its primary physical mechanism is a **heavy shield**.

### Shield Defense

The shield can be physically oriented toward incoming attacks.

The game system can evaluate:

- shield orientation;
- shield position;
- incoming attack direction;
- distance between the shield and the champion.

Shield effectiveness can increase as the shield is positioned farther from the champion.

This makes the shield a genuine physical mechanism rather than a simple digital status.

### Shield Burst

The Tank can also use the heavy shield offensively.

A rapid movement of the robot produces a shield burst.

The game system interprets the measured physical movement as an attack.

Conceptually:

```text
Heavy shield
     +
burst movement
     ↓
physical motion
     ↓
IMU / tracking
     ↓
game event
     ↓
damage / knockback
```

### Healing Beam

The Tank also contains the team's healing mechanism.

An optical emitter produces a light beam.

The allied champion contains a photodiode capable of detecting the signal.

The optical communication can include a modulated pattern identifying:

- the source;
- the ability;
- potentially a sequence or packet.

This prevents arbitrary light from being interpreted as a healing event.

Healing can depend on:

- line of sight;
- distance;
- alignment;
- duration.

The physical interaction is therefore:

```text
Tank
 │
 │ light beam
 ▼
Allied Champion
 │
 │ photodiode
 ▼
Core / Game System
 │
 ▼
HP recovery
```

---

# 15. Fighter Champion

The Fighter is the close-range combat champion.

Its primary weapon is a **physical sword**.

The Champion Interface contains the IMU required to measure the sword's movement.

The team's robot contains the mechanism that physically moves the sword.

This creates a direct engineering relationship between:

- actuator design;
- weapon mass;
- movement speed;
- reach;
- mechanical structure;
- control algorithm.

A possible attack model is:

> **Fast, narrow swing → stronger attack**

> **Wide swing → larger effective area but lower strength**

The exact mathematical relationship should be established during balancing.

---

# 16. Artillery Champion

The Artillery champion combines long-range damage and area control.

It has two principal physical mechanisms:

### Ballistic Launcher

The team builds the mechanism that moves and operates the launcher.

The Champion Interface measures the relevant physical launch parameters.

The game server calculates the simulated projectile.

**No real projectile is fired at opponents.**

Instead:

```text
Physical launcher
       ↓
Sensor measurements
       ↓
Game server
       ↓
Projectile simulation
       ↓
Arena projection
       ↓
Impact / AoE / damage
```

This provides the physical engineering challenge of building the launcher while maintaining a safe competition environment.

### Mines

The Artillery robot can physically deploy mines.

A mine becomes an active game object once deployed.

When an opponent triggers or interacts with it, the game server determines the resulting effect.

Possible effects include:

- magical damage;
- AoE damage;
- slowing;
- other status effects.

The exact values and effects will be determined through playtesting.

The mine can physically illuminate when activated, while projection provides the corresponding visual effect.

---

# 17. Strategic Freedom

The three champions do not have fixed positions.

The team decides where to deploy them.

The map contains:

- Top;
- Mid;
- Bottom;
- Jungle.

But these are **strategic areas, not mandatory roles**.

A Tank can play Jungle.

A Fighter can play Mid.

An Artillery can control Top.

All three can rotate between areas.

This means teams are free to develop their own compositions and strategies.

For example:

### Defensive

Tank controls a lane while Fighter and Artillery contest the jungle.

### Aggressive

Fighter and Tank pressure one side while Artillery controls the opposite area.

### Objective-focused

Tank and Fighter contest a jungle objective while Artillery controls access with mines and long-range attacks.

The competition therefore does not prescribe a conventional MOBA lane assignment.

---

# 18. Arena

The arena contains:

- three lanes;
- jungle;
- two bases;
- turrets;
- Nexus structures;
- neutral monsters;
- Power Charges;
- Dragon;
- gates;
- selected movable obstacles;
- a central objective.

The arena should remain physically open and well lit.

The objective is to make the robots visible to spectators while allowing the projected game layer to enhance the physical environment.

---

# 19. Three Lanes

The arena contains:

- Top Lane;
- Mid Lane;
- Bottom Lane.

The lanes provide the primary routes toward the enemy base.

Each lane contains defensive structures.

The geometry should encourage different tactical approaches without becoming unnecessarily complicated to build.

---

# 20. Jungle

The Jungle connects the three lanes.

It provides:

- alternative routes;
- resources;
- neutral objectives;
- ambush opportunities;
- rotations;
- strategic positioning.

The Jungle contains:

- Mana Monsters;
- Dragon;
- Power Charges;
- the central objective;
- selected gates/passages.

The Jungle does not require complex autonomous NPC systems for the first edition.

---

# 21. Turrets

Turrets protect the lanes.

Each turret has:

- HP;
- a game-server state;
- a physical representation;
- LED indicators.

The turret contains an LED strip representing its current HP percentage.

For example:

```text
100%  ████████████████████
 75%  ███████████████
 50%  ██████████
 25%  █████
  0%  
```

This makes the state of the battlefield immediately visible.

---

# 22. Nexus

Each team has a Nexus.

The Nexus is the ultimate objective.

The match ends when one team's Nexus reaches zero HP.

The Nexus should provide strong physical and visual feedback throughout the match.

---

# 23. Mana Monsters

Mana Monsters are neutral jungle objectives.

Defeating them provides an energy/mana advantage.

They encourage teams to leave their lanes and contest jungle resources.

Their game state can be maintained by the game server while their physical representation and projection provide the spectator experience.

---

# 24. Dragon

The Dragon is a major neutral objective.

Defeating it provides a significant strategic advantage.

The Dragon should create a major team event involving:

- preparation;
- positioning;
- team fights;
- stealing attempts;
- rotations.

The exact reward should be determined experimentally.

---

# 25. Power Charges

Power Charges are distributed throughout the map.

They provide additional resources or temporary advantages.

They are intended to create smaller, recurring conflicts compared with the Dragon.

Their placement encourages movement between lanes and jungle.

The exact mechanics should be kept simple during the first edition.

---

# 26. Power Core

The Power Core is proposed as a unique objective intended to differentiate the competition from a conventional MOBA.

Rather than simply defeating another monster for a numerical buff, the Power Core introduces a physical objective.

Possible implementations include:

- capturing it;
- pushing it;
- transporting it;
- escorting it.

The final mechanism should be chosen after physical prototyping.

The objective is to create a situation where robot engineering directly influences strategic play.

---

# 27. Gates and Physical Obstacles

Selected passages contain physical gates.

Game events can change their state.

The arena can therefore change during the match without requiring a complex transforming environment.

Selected obstacles can also be physically moved by robots.

This creates opportunities for:

- blocking passages;
- creating cover;
- opening routes;
- controlling territory.

These mechanisms should remain mechanically simple enough for the six-month development timeline.

---

# 28. Death and Respawn

Each champion has an LP/HP value maintained by the game server.

When:

> **LP ≤ 0**

the champion becomes dead.

A dead champion:

- cannot use offensive abilities;
- is removed from active combat;
- must return to its base;
- waits for a predefined respawn period.

After the respawn timer expires, the champion becomes active again.

The exact treatment of the physical vehicle while its champion is dead must be defined in the final regulations.

---

# 29. Energy System

Each champion has an energy resource.

Abilities consume energy.

Energy management creates another strategic layer.

A team may have to choose between:

- using abilities aggressively;
- conserving energy;
- contesting Mana Monsters;
- retreating to recover resources.

The exact energy values and regeneration rules will be determined during balancing.

---

# 30. Electronic Referee / Game Server

The competition uses a centralized game server as the **authoritative electronic referee**.

It maintains:

- champion identity;
- position;
- HP;
- energy;
- alive/dead state;
- abilities;
- cooldowns;
- attacks;
- damage;
- respawn;
- turrets;
- monsters;
- Power Charges;
- Dragon;
- Power Core;
- Nexus;
- match timer.

The server determines the official game state.

Robots provide physical measurements and events.

The game server interprets these according to the competition rules.

---

# 31. Communication Infrastructure

Communication is a critical subsystem.

The Champion Core communicates wirelessly with the game infrastructure using BLE and its antenna.

The communication protocol should be designed around:

- efficiency;
- low latency;
- reliability;
- predictable behavior;
- failure detection.

Because the game server is authoritative, communication failure is potentially a match-level failure.

Therefore, the communication architecture must be validated well before tournament operation.

Communication should be stress-tested with:

- multiple robots;
- simultaneous messages;
- maximum expected traffic;
- interference;
- long operating periods;
- worst-case arena conditions.

---

# 32. Development Server Availability

The game server should be fully operational **at least two months before the competition**.

This is a critical requirement.

Teams need sufficient time to:

- integrate their robots;
- test their software;
- understand the API;
- simulate matches;
- identify compatibility problems;
- optimize their control systems.

The competition should not reveal essential technical behavior shortly before the event.

---

# 33. Public Specification Before the Competition

Before the server is made available for team practice, the organization should publish the complete technical specification.

This should include:

- Champion Interface documentation;
- Core API;
- communication protocol;
- game-server API;
- game-state definitions;
- event formats;
- timing requirements;
- hardware interfaces;
- tracking interface;
- rules;
- limits;
- safety requirements;
- testing procedures.

The goal is:

> **Teams should be able to develop against the specification without depending on undocumented behavior.**

The official server can remain closed-source while its **public API and behavior are fully documented**.

---

# 34. Closed Game Server, Open Interface

The competition infrastructure can use a closed-source game server.

This does not conflict with the open-source philosophy of the Champion Interface.

The distinction is:

### Public

- Champion Interface hardware design;
- firmware/software except the competition token;
- APIs;
- communication specifications;
- game protocol;
- integration documentation.

### Private

- game server implementation;
- competition-time authentication token;
- internal infrastructure secrets.

The teams therefore have transparency about everything they need to integrate their robots while the authoritative competition infrastructure remains controlled by the organization.

---

# 35. Team Development Workflow

Teams should be able to work without official competition hardware.

A recommended workflow is:

```text
       Public Specification
               │
               ▼
      Team builds test Core
               │
               ▼
      Team builds robot
               │
               ▼
       API-level integration
               │
               ▼
        Local simulation
               │
               ▼
     Official development server
               │
               ▼
       Official interface
               │
               ▼
         Competition
```

This significantly reduces the dependency on the six official interfaces.

---

# 36. Spectator Experience

The competition is intended to be experienced physically.

Spectators should be able to see:

- the robots;
- their physical weapons;
- shields;
- mines;
- turrets;
- objectives;
- the Nexus;
- the consequences of attacks.

Projection mapping can provide the digital layer.

The arena itself becomes part of the game visualization.

---

# 37. Projection

The game server sends real-time state to a visualization engine.

The visualization engine can project:

- missile trajectories;
- predicted impact areas;
- AoE;
- explosions;
- healing beams;
- attack ranges;
- mine activation;
- objective states;
- special effects.

For example:

```text
Robot
  │
  ▼
Game Server
  │
  ▼
Visualization Engine
  │
  ├── Projector
  ├── Arena LEDs
  └── Spectator Screens
```

Projection is therefore not responsible for determining the game.

It is a visualization of the authoritative game state.

---

# 38. Physical vs Digital

The competition follows a simple principle:

> **Physical where physical interaction creates gameplay. Digital where digital implementation is more practical.**

### Physical

- robots;
- sword;
- shield;
- healing emitter;
- missile launcher;
- mines;
- turrets;
- gates;
- selected obstacles;
- Dragon;
- Power Core;
- Nexus.

### Digital

- HP;
- damage;
- energy;
- cooldowns;
- status effects;
- projectile simulation;
- AoE calculation;
- respawn;
- game rules.

### Projected

- trajectories;
- projectiles;
- impacts;
- AoE;
- healing effects;
- objective visualization;
- battlefield information.

---

# 39. Engineering Freedom

Teams should have maximum freedom in robot construction, subject only to requirements genuinely necessary for:

- safety;
- compatibility;
- arena operation;
- fairness;
- tracking;
- communication;
- interface integration.

The competition should avoid prescribing unnecessary mechanical architectures.

Teams should be free to choose:

- drivetrain;
- motors;
- chassis;
- weapon actuators;
- mechanisms;
- control algorithms;
- robot geometry;
- construction methods.

The only standardized physical part is the official Champion Interface.

This creates the intended competition:

> **Same champion interface. Different robots. Different engineering solutions.**

---

# 40. Interface Integrity vs Engineering Freedom

The competition deliberately separates two things.

### The Champion Interface

Must be standardized.

It cannot be modified or tampered with.

### The Robot

Is open to engineering innovation.

Teams are free to design everything around the interface.

Therefore:

> **The competition standardizes the game boundary, not the robot.**

This is essential for maintaining fairness while preserving engineering freedom.

---

# 41. Safety

The final competition regulations must define safety requirements concerning:

- kinetic energy;
- mechanical hazards;
- batteries;
- electrical systems;
- emergency shutdown;
- exposed moving parts;
- physical projectiles;
- arena access;
- inspection.

In particular, the missile system is a **ballistic simulation mechanism**, not a system for firing dangerous projectiles at opponents.

Safety rules should prevent hazardous designs without unnecessarily restricting legitimate engineering approaches.

---

# 42. Six-Month Development Strategy

The competition has approximately six months of development time.

The project should therefore prioritize:

> **Reliability > feature count**

and:

> **Gameplay quality > technical complexity**

---

## Month 1 — Architecture and Specification

Finalize:

- game rules;
- three champion designs;
- Champion Interface architecture;
- Core API;
- communication architecture;
- game-state model;
- tracking approach;
- arena dimensions;
- safety requirements.

The Champion Interface specification should be frozen as early as possible.

---

## Month 2 — Core Infrastructure

Develop:

- Core firmware;
- API;
- communication;
- game server;
- tracking;
- HP;
- energy;
- basic game events.

Begin testing the official communication architecture.

---

## Month 3 — Physical Combat

Prototype:

- Tank shield;
- shield burst;
- healing beam;
- Fighter sword;
- Artillery launcher;
- mines.

The goal is to validate the physical-mechanics model.

---

## Month 4 — Arena

Build and integrate:

- three lanes;
- jungle;
- turrets;
- Nexus;
- bases;
- Dragon;
- Mana Monsters;
- Power Charges;
- gates;
- central objective.

---

## Month 5 — Full Team Testing

Progress through:

```text
1v1
 ↓
2v2
 ↓
3v3
```

Test:

- combat;
- communication;
- tracking;
- objectives;
- jungle rotations;
- team fights;
- balance;
- game duration.

---

## Month 6 — Stabilization

Prioritize:

- reliability;
- calibration;
- safety;
- balancing;
- communication stress testing;
- full-match testing;
- projection;
- tournament procedures.

New features should only be introduced if the existing system is already stable.

---

# 43. Two-Month Team Practice Requirement

The official game server should be ready **no later than two months before the competition**.

This creates a protected practice period.

Teams should receive the necessary documentation and APIs at the same time.

The final two months should therefore primarily be:

> **team integration + testing + balancing**

rather than:

> **discovering how the competition works.**

Any major change to the API or Champion Interface after this point should be avoided unless necessary for safety or critical reliability.

---

# 44. MVP

The first edition should contain:

### Competition

- 3v3;
- three champions per team;
- flexible champion deployment;
- three lanes;
- jungle;
- Nexus;
- turrets.

### Champions

- Tank / Support;
- Fighter;
- Artillery.

### Physical abilities

- shield;
- shield burst;
- healing beam;
- sword;
- missile launcher;
- mines.

### Resources and objectives

- energy;
- Mana Monsters;
- Dragon;
- Power Charges;
- Power Core.

### Arena

- gates;
- selected movable obstacles;
- bases;
- Nexus.

### Infrastructure

- Champion Interfaces;
- Core;
- USB API;
- BLE communication;
- tracking;
- centralized game server;
- electronic referee;
- projection;
- LED indicators.

---

# 45. Future Extensions

The architecture should allow future editions to introduce:

- 5v5;
- additional champions;
- additional physical abilities;
- autonomous minions;
- more sophisticated monsters;
- more objectives;
- advanced arena transformations;
- more complex projection;
- AR for broadcast;
- additional game modes.

These features are **not requirements for the first edition**.

---

# 46. What Makes This Competition Different?

The competition uses the strategic vocabulary of a MOBA:

- lanes;
- jungle;
- champions;
- resources;
- objectives;
- team fights;
- turrets;
- Nexus.

But the underlying gameplay is fundamentally physical.

A sword attack depends on the movement of a real weapon.

A shield is physically positioned.

A healing beam physically reaches an ally.

A mine is physically deployed.

A missile launcher physically performs the launch action.

The robot's mechanical design therefore directly influences its capabilities.

Two teams using the same champion can build completely different machines.

The competition consequently combines:

> **Robotics + Mechanical Engineering + Embedded Systems + Software + Game Design + Strategy + Teamwork**

---

# 47. Core Vision

The final objective is to create a **physical esport**.

The spectator should not see merely six RC cars.

They should see a physical game world:

- robots fighting;
- shields moving;
- swords striking;
- healing beams connecting champions;
- mines being deployed;
- missiles being launched;
- turrets visibly losing HP;
- jungle objectives being contested;
- gates changing the battlefield;
- projectiles and effects appearing directly on the arena;
- the Nexus eventually falling.

Behind the physical spectacle is a rigorous software system that maintains the authoritative state of the match.

The organization provides the standardized game boundary.

The teams provide the engineering.

The game server provides fairness.

The arena provides the battlefield.

The projection provides the visual game layer.

And the central philosophy remains:

# **We define the game. You define the robot.**

The competition is therefore not a video game reproduced with robots.

It is a new physical game in which **robotics is the medium through which the game is played.**
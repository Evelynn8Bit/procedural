#[derive(Component)]
struct Player {
    name: String,
    classes: Vec<Classes>,
    currency: u32,
    level: u32,
    houses: Vec<House>,
    guild: Guild,
    inventory: Vec<Item>,
}
#[derive(Component)]
enum Classes {
    tank,
    healer,
    dps,
}
#[derive(Component)]
struct Skills {
    name: String,
    level: u32,
    experience: u32,
}
#[derive(Component)]
struct Classes {
    class: Enum<Classes>,
    level: u32,
    health: u32,
    mana: u32,
    experience: u32,
    inventory: Vec<Item>,
    equipped: Vec<Item>,
    skills: Vec<Skill>,
    status: Vec<Status>,
    location: Location,
}

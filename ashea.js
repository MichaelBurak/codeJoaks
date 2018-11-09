class GoodFriendShapeBrainSpot {
  constructor() {}
  static freak() {
    return "Remember when we talked about Slavoj Zizek for like two hours straight?";
  }
}

class Ashe extends GoodFriendShapeBrainSpot {
  constructor() {}
  static eatingFromTheTrashCanOfIdeology() {
    return super.freak() + "It was some good good shit bruh.";
  }
}

Ashe.eatingFromTheTrashCanOfIdeology();

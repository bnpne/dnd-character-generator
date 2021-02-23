export function countData(data) {
  var yes = 0
  var no = 0
  var maybe = 0

  data.forEach(i => {
    switch (i.question_1) {
      case 'yes':
        yes += 1
        break;
      case 'no':
        no += 1
        break;
      case 'maybe':
        maybe += 1
        break;
      default:
        break;
    }
  })
  return {yes, maybe, no}
}

export function countFive(data) {
  var small = 0
  var medium = 0
  var large = 0

  data.forEach(i => {
    switch (i.question_5) {
      case 'small':
        small += 1
        break;
      case 'medium':
        medium += 1
        break;
      case 'large':
        large += 1
        break;
      default:
        break;
    }
  })
  return {small, medium, large}
}

export function countSix(data) {
  var good = 0
  var neutral = 0
  var evil = 0

  data.forEach(i => {
    switch (i.question_6) {
      case 'good':
        good += 1
        break;
      case 'neutral':
        neutral += 1
        break;
      case 'evil':
        evil += 1
        break;
      default:
        break;
    }
  })
  return {good, neutral, evil}
}
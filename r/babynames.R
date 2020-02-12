library(babynames)
library(tidyverse)
library(jsonlite)

names <- babynames
applicants <- applicants

heather <- names %>%
  filter(name == 'Heather')

namePlot <- function(inputName, inputSex) {
  name <- names %>%
    filter(name == inputName & sex == inputSex)
  
  ggplot(name, aes(x = year, y = prop)) +
    geom_line()
}

namePlot('Donald', 'M')
namePlot('Richard', 'M')
namePlot('Daniel', 'M')
namePlot('John', 'M')
namePlot('Heather', 'F')

##for each name by gender, calculate the minimum and maxium prop, then find the range. finally, sort them by the range

namesGroupedF <- group_by(names, name, sex) %>%
  nest() %>%
  filter(sex == 'F')

namesGrouped <- group_by(names, name, sex) %>%
  nest()

femaleNames <- namesGrouped %>%
  filter(sex == 'F') %>%
  ungroup() %>%
  select(name) %>%
  pull(name)

maleNames <- namesGrouped %>%
  filter(sex == 'M') %>%
  ungroup() %>%
  select(name) %>%
  pull(name)

write_json(maleNames, './maleNames.json')



write_csv(namesGrouped, './babynames.csv')

saveJs(namesGrouped, './babynames.json')

dataPulled <- pull(namesGroupedF, data)
map2(dataPulled, i)




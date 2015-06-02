Experiments
===========
###1. Predicate Logic with Neural Network
  **Objects**
  + Apple
  + Peter

  **Relations/Predicate**
  + is_kind_of()
  + is_man()
  + located()

  **Functions**
  + best_friend()
  + beginning_of()

  **Connectives**
  + ⊂ entail
	+ ⊃ reverse entail
  + = equivalence
  + ǀ or
  + ∧ negation
	+ cover
  + independence

  **Quantifiers**
  + ∀x: For all x ( is_man(x) is_mortal(x) )
  + ∃y: There exists ( is_father(y, Peter) )

###2. Word Presentation
  **Bigram characters model**
  ```
  "I eat apple" = ["#i", "i ", " e", "ea", "at", "t ", " a", "ap", "pp", "pl", "le", "e#"]
  "我吃蘋果" = ["#我", "我吃", "吃蘋", "蘋果", "果#"]
  ```

  **Reference**
  http://groups.csail.mit.edu/sls/publications/2007/Choueiter_Interspeech07.pdf

unit eqs;

interface

type
  Peq0 = ^Teq0;
  Peq1 = ^Teq1;
  Peq2 = ^Teq2;

  Teq0 = object
    c: real;
    procedure input; virtual;
    procedure solve; virtual;
    constructor init;
    destructor done; virtual;
  end;

  Teq1 = object(Teq0)
    b: real;
    procedure input; virtual;
    procedure solve; virtual;
  end;

  Teq2 = object(Teq1)
    a: real;
    procedure input; virtual;
    procedure solve; virtual;
  end;

implementation

  constructor Teq0.init;begin

  end;

  destructor Teq0.done;begin

  end;

  procedure Teq0.input;begin
    writeln('0 power c: ');
    readln(c);
  end;

  procedure Teq1.input;begin
    Teq0.input;
    writeln('1 power b: ');
    readln(b);
  end;

  procedure Teq2.input;begin
    Teq1.input;
    writeln('2 power a: ');
    readln(a);
  end;

  procedure Teq0.solve;begin
    if c=0
    then
      writeln('x - any number')
    else
      writeln('not solution');
  end;

  procedure Teq1.solve;begin
    if b=0
    then
      Teq0.solve
    else begin
      writeln('Answer : ', -(c/b));
    end;
  end;

  procedure Teq2.solve;
  var
    d: real;
  begin
    if(a=0)then
      Teq1.solve
    else begin
      d:=(b*b) - 4*a*c;
      if d<0 then
        writeln('not real number solution')
      else if d=0 then
        writeln('Answer :', -b/(2*a))
      else begin
        writeln('x1= ', (-b+sqrt(d))/(2*a));
        writeln('x2= ', (-b-sqrt(d))/(2*a));
      end;
    end;
  end;
end.

{
  'targets': [
    {
      'target_name': 'eknbindings',
      'sources': [
        'src/bindings.cc',
        'src/value.cc',
        'src/function.cc',
        'src/gobject.cc',
        'src/boxed.cc',
        'src/mainloop.cc',
      ],
      'cflags': [
        '<!@(pkg-config --cflags gobject-introspection-1.0)'
      ],
      'ldflags': [
        '<!@(pkg-config --libs-only-L --libs-only-other gobject-introspection-1.0)',
      ],
      'libraries': [
        '<!@(pkg-config --libs-only-l gobject-introspection-1.0)',
      ],
    },
  ],
}
